import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private pokemonService: PokemonService, private cdr: ChangeDetectorRef) { }
  

  ngOnInit(): void {
    console.log('Iniciando carga');
    this.loadPokemon();
  }

  loadPokemon(): void {
  console.log('LOAD START');

  this.pokemonService.getPokemonList(1350).subscribe(res => {
    console.log('LIST RECEIVED', res.results.length);

    const requests = res.results.map((p: any) =>
      this.pokemonService.getPokemon(p.name)
    );

    forkJoin<Pokemon[]>(requests).subscribe(fullData => {
      console.log('DETAILS RECEIVED', fullData.length);

      this.pokemonList = [...fullData];
      console.log('ASSIGNED', this.pokemonList.length);
      this.cdr.detectChanges();
    });
  });
}
}