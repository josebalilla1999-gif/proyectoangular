import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { map, Observable, switchMap } from 'rxjs';
import { PokemonMapperService } from '../services/traduccion';

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
  private mapper: PokemonMapperService
) {}

pokemon$!: Observable<Pokemon>;

ngOnInit(): void {
  this.pokemon$ = this.route.paramMap.pipe(
    switchMap(params => {
      const name = params.get('name')!;
      return this.pokemonService.getPokemon(name);
    }),
    map(pokemon => this.mapper.mapPokemon(pokemon))
  );
}
}
