import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html'
})
export class PokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonService.getPokemonList(20).subscribe(res => {
      const requests = res.results.map((p: any) =>
        this.pokemonService.getPokemon(p.name)
      );
      console.log(res.results);
      forkJoin<Pokemon[]>(requests).subscribe({
        next: data => {
          console.log('DATA FINAL:', data);
          this.pokemonList = data;
        },
        error: err => console.error('ERROR:', err)
      });
    });
  }
}