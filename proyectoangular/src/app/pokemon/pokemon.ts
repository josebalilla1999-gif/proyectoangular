import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonMapperService } from '../services/traduccion';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class PokemonComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  currentPage = 0;
  pageSize = 50;
  private page$ = new BehaviorSubject<number>(0);

  constructor(private pokemonService: PokemonService, private mapper: PokemonMapperService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {

    this.page$
      .pipe(
        switchMap(page => {

          const offset = page * this.pageSize;

          console.log('PAGE STREAM:', page, 'OFFSET:', offset);
          console.log({
            page: this.currentPage,
            offset
          });

          return this.pokemonService.getPokemonList(this.pageSize, offset)
            .pipe(
              switchMap(res => {

                console.log(
                  'Página:', page,
                  'Primer Pokémon:', res.results[0]?.name,
                  'Último Pokémon:', res.results[res.results.length - 1]?.name
                );
                const requests = res.results.map((p: any) =>
                  this.pokemonService.getPokemon(p.name)
                );

                return forkJoin<Pokemon[]>(requests);
              })
            );
        })
      )
      .subscribe(fullData => {

        this.pokemonList = fullData.map(p =>
          this.mapper.mapPokemon(p)
        );
        this.cdr.detectChanges();
      });
      
  }
  formatHeight(height: number): string {
    return `${height / 10} m`;
  }

  formatWeight(weight: number): string {
    return `${weight / 10} kg`;
  }

  nextPage(): void {
    this.currentPage++;
    this.page$.next(this.page$.value + 1);
  }

  prevPage(): void {
    if (this.page$.value > 0) {
      this.currentPage--;
      this.page$.next(this.page$.value - 1);
    }
  }
}