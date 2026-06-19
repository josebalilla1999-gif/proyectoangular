import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { PokemonMapperService } from '../services/traduccion';
import { TypeService } from '../services/type';

export interface PokemonDetailPageVM {
  pokemon: any;
  strengths: string[];
  weaknesses: string[];
  immunities: string[];
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
    private typeService: TypeService
  ) { }

  ngOnInit(): void {

    this.pokemon$ = this.route.paramMap.pipe(

      switchMap(params => {
        const name = params.get('name')!;
        return this.pokemonService.getPokemon(name);
      }),

      switchMap(pokemon => {

        const types = pokemon.types.map((t: any) => t.type.name);

        if (!types.length) {
          return [{
            pokemon,
            strengths: [],
            weaknesses: []
          }];
        }

        return forkJoin(
          types.map(type => this.typeService.getType(type))
        ).pipe(
          map(typeData => {

            const weaknessSet = new Set<string>();
            const strengthSet = new Set<string>();
            const immunitiesSet = new Set<string>();
            // tipos que están en ambos

            typeData.forEach(data => {

              data.damage_relations.double_damage_from.forEach((t: any) =>
                weaknessSet.add(t.name)
              );

              data.damage_relations.half_damage_from.forEach((t: any) =>
                strengthSet.add(t.name)
              );
              
              data.damage_relations.no_damage_from.forEach((t: any) =>
                immunitiesSet.add(t.name));
            });

            const intersection = new Set(
  [...strengthSet].filter(t => weaknessSet.has(t) || immunitiesSet.has(t))
);

// eliminarlos de ambos
intersection.forEach(t => {
  strengthSet.delete(t);
  weaknessSet.delete(t);
});

            const vm: PokemonDetailPageVM = {
              pokemon,
              strengths: Array.from(strengthSet),
              weaknesses: Array.from(weaknessSet),
              immunities: Array.from(immunitiesSet)
            };

            return vm;
          })
        );
      }),

      map(vm => {

        return this.mapper.mapPokemonDetail(vm);
      })
    );
  }
}