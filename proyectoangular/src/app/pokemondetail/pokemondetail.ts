import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { PokemonMapperService } from '../services/traduccion';
import { TypeService } from '../services/type';
import { Ability } from '../services/ability';
import { EvolutionNodeComponent } from '../evolution.node/evolution.node';
import { HttpClient } from '@angular/common/http';

export interface PokemonDetailPageVM {
  pokemon: any;
  strengths: string[];
  weaknesses: string[];
  immunities: string[];
  abilities: AbilityVM[];
  description: string;
  evolutionTree: EvolutionNode;
}

export interface PokemonDetailVM {
  pokemon: any;
  weaknesses: string[];
  strengths: string[];
  immunities: string[];
  abilities: AbilityVM[];
  description: string;
  evolutionTree: EvolutionNode;
}

export interface AbilityVM {
  name: string;
  description: string;
}

export interface EvolutionNode {
  name: string;
  evolvesTo: EvolutionNode[];
}

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule, EvolutionNodeComponent],
  templateUrl: './pokemondetail.html',
  styleUrl: './pokemondetail.css'
})
export class PokemonDetailComponent implements OnInit {

  pokemon$!: Observable<PokemonDetailPageVM>;
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private mapper: PokemonMapperService,
    private typeService: TypeService,
    private abilityService: Ability,
    private http: HttpClient
  ) { }

  private buildEvolutionTree(chain: any): EvolutionNode {
    const traverse = (node: any): EvolutionNode => {
      return {
        name: node.species.name,
        evolvesTo: node.evolves_to.map((child: any) => traverse(child))
      };
    };
    return traverse(chain);
  }

  ngOnInit(): void {

    this.pokemon$ = this.route.paramMap.pipe(

      switchMap(params => {
        const name = params.get('name')!;
        return this.pokemonService.getPokemon(name);
      }),

      switchMap(pokemon => {
        return forkJoin({
          pokemon: of(pokemon),
          species: this.http.get<any>(
            pokemon.species.url
          )
        });
      }),

      switchMap(({ pokemon, species }) => {
        const types = pokemon.types.map((t: any) => t.type.name);
        const description =
          species.flavor_text_entries
            .find((e: any) => e.language.name === 'es')
            ?.flavor_text
            .replace(/\n|\f/g, ' ')
          ??
          'Sin descripción';

        const abilityRequests = pokemon.abilities.map((a: any) =>
          this.abilityService.getAbility(a.ability.name)
        );

        return forkJoin({
          types: types.length
            ? forkJoin(types.map(type => this.typeService.getType(type)))
            : of([]),

          abilityDesc: abilityRequests.length
            ? forkJoin(abilityRequests)
            : of([]),
          evolution: this.pokemonService
            .getEvolutionChain(species.evolution_chain.url)
        }).pipe(

          map(({ types, abilityDesc, evolution }) => {

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
              [...weaknessSet].filter(t =>
                strengthSet.has(t)
              )
            );

            intersection.forEach(t => {
              strengthSet.delete(t);
              weaknessSet.delete(t);
            });

            const intersection2 = new Set(
              [...weaknessSet].filter(t =>
                immunitiesSet.has(t)
              )
            );

            intersection2.forEach(t => {
              weaknessSet.delete(t);
            });

            const intersection3 = new Set(
              [...strengthSet].filter(t =>
                immunitiesSet.has(t)
              )
            );

            intersection3.forEach(t => {
              strengthSet.delete(t);
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

            const evolutionTree = this.buildEvolutionTree(evolution.chain);

            return {
              pokemon,
              description,
              evolutionTree,
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
  translateType(type: string): string {
    return this.mapper.typeMap[type] ?? '-';
  }
  translateStat(name: string): string {
    return this.mapper.statMap[name] ?? name;
  }
}