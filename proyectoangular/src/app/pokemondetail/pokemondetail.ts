import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { PokemonMapperService } from '../services/traduccion';
import { TypeService } from '../services/type';
import { Ability } from '../services/ability';

export interface PokemonDetailPageVM {
  pokemon: any;
  strengths: string[];
  weaknesses: string[];
  immunities: string[];
  abilities: AbilityVM[];
}

export interface PokemonDetailVM {
  pokemon: any;
  weaknesses: string[];
  strengths: string[];
  immunities: string[];
  abilities: AbilityVM[];
}

export interface AbilityVM {
  name: string;
  description: string;
}

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemondetail.html',
  styleUrl: './pokemondetail.css'
})
export class PokemonDetailComponent implements OnInit {

  pokemon$!: Observable<PokemonDetailPageVM>;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private mapper: PokemonMapperService,
    private typeService: TypeService,
    private abilityService: Ability
  ) { }

  ngOnInit(): void {

    this.pokemon$ = this.route.paramMap.pipe(

  switchMap(params => {
    const name = params.get('name')!;
    return this.pokemonService.getPokemon(name);
  }),

  switchMap(pokemon => {

    const types = pokemon.types.map((t: any) => t.type.name);

    const abilityRequests = pokemon.abilities.map((a: any) =>
      this.abilityService.getAbility(a.ability.name)
    );

    return forkJoin({
      types: types.length
        ? forkJoin(types.map(type => this.typeService.getType(type)))
        : of([]),

      abilityDesc: abilityRequests.length
        ? forkJoin(abilityRequests)
        : of([])
    }).pipe(

      map(({ types, abilityDesc }) => {

        const weaknessSet = new Set<string>();
        const strengthSet = new Set<string>();
        const immunitiesSet = new Set<string>();

        types.forEach(data => {

          data.damage_relations.double_damage_from.forEach((t: any) =>
            weaknessSet.add(t.name)
          );

          data.damage_relations.half_damage_from.forEach((t: any) =>
            strengthSet.add(t.name)
          );

          data.damage_relations.no_damage_from.forEach((t: any) =>
            immunitiesSet.add(t.name)
          );
        });

        // eliminar duplicados cruzados
        const intersection = new Set(
          [...strengthSet].filter(t =>
            weaknessSet.has(t) || immunitiesSet.has(t)
          )
        );

        intersection.forEach(t => {
          strengthSet.delete(t);
          weaknessSet.delete(t);
        });

        const abilities: AbilityVM[] = abilityDesc.map((ability: any) => {

          const entry =
            ability.flavor_text_entries.find((t: any) => t.language.name === 'es') ??
            ability.flavor_text_entries.find((t: any) => t.language.name === 'en');

          return {
            name: ability.name,
            description: entry?.flavor_text ?? 'Sin descripción'
          };
        });

        return {
          pokemon,
          strengths: Array.from(strengthSet),
          weaknesses: Array.from(weaknessSet),
          immunities: Array.from(immunitiesSet),
          abilities
        } as PokemonDetailPageVM;
      })
    );
  }),

  map(vm => this.mapper.mapPokemonDetail(vm))
);
  }
}