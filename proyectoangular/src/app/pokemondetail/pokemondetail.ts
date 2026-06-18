import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { PokemonMapperService } from '../services/traduccion';
import { TypeService, PokemonDetailVM } from '../services/type';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemondetail.html',
  styleUrl: './pokemondetail.css'
})
export class PokemonDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private mapper: PokemonMapperService,
    private typeService: TypeService
  ) { }

  pokemon$!: Observable<PokemonDetailVM>;
  weaknesses: string[] = [];
  strengths: string[] = [];

  ngOnInit(): void {

  this.pokemon$ = this.route.paramMap.pipe(

    switchMap(params => {
      const name = params.get('name')!;
      return this.pokemonService.getPokemon(name);
    }),

    switchMap(pokemon => {

      const types = pokemon.types.map((t: any) => t.type.name);

      return forkJoin(
        types.map(type => this.typeService.getType(type))
      ).pipe(
        map(typeData => {

          const weaknessSet = new Set<string>();
          const strengthSet = new Set<string>();

          typeData.forEach(data => {

            data.damage_relations.double_damage_from.forEach((t: any) =>
              weaknessSet.add(t.name)
            );

            data.damage_relations.double_damage_to.forEach((t: any) =>
              strengthSet.add(t.name)
            );
          });

          return {
            pokemon,
            weaknesses: Array.from(weaknessSet),
            strengths: Array.from(strengthSet)
          };
        })
      );
    }),

    map(vm => ({
      ...vm,
      pokemon: this.mapper.mapPokemon(vm.pokemon)
    }))
  );
}
  calculateTypeRelations(types: string[]): void {

    const weaknessSet = new Set<string>();
    const strengthSet = new Set<string>();

    types.forEach(type => {

      this.typeService.getType(type).subscribe(data => {

        data.damage_relations.double_damage_from.forEach((t: any) =>
          weaknessSet.add(t.name)
        );

        data.damage_relations.double_damage_to.forEach((t: any) =>
          strengthSet.add(t.name)
        );

        this.weaknesses = Array.from(weaknessSet);
        this.strengths = Array.from(strengthSet);
      });
    });
  }
}
