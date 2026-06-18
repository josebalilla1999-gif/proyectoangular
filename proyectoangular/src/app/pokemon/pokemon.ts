import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PokemonMapperService } from '../services/traduccion';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css'
})
export class PokemonComponent implements OnInit {

  allPokemon: Pokemon[] = [];
  pokemonList: Pokemon[] = [];
  searchText: string = '';
  filteredPokemon: Pokemon[] = [];
  currentPage = 0;
  pageSize = 50;
  private page$ = new BehaviorSubject<number>(0);
  sortDirection: 'asc' | 'desc' = 'asc';
  sortCriteria: string = 'name';

  constructor(private pokemonService: PokemonService, private mapper: PokemonMapperService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

    this.pokemonService.getPokemonList(2000, 0)
      .pipe(
        switchMap(res => forkJoin<Pokemon[]>(
          res.results.map((p: { name: string; }) => this.pokemonService.getPokemon(p.name))
        ))
      )
      .subscribe(data => {
        this.allPokemon = data.map(p => this.mapper.mapPokemon(p));
        this.applyPaginationAndSort();
        this.applyFiltersAndPagination();
      });

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

  applyFiltersAndPagination(): void {

    let data = this.allPokemon;

    // 🔍 FILTRO POR NOMBRE
    if (this.searchText.trim()) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.pokemonList = data.slice(start, end);
  }

  onSearchChange(value: string): void {
    this.searchText = value;
    this.currentPage = 0;
    this.applyFiltersAndPagination();
  }

  sortPokemon(criteria: string): void {
    this.sortCriteria = criteria;

    const direction = this.sortDirection === 'asc' ? 1 : -1;

    const sorted = [...this.allPokemon].sort((a: any, b: any) => {

      let result = 0;
      switch (criteria) {
        case 'name':
          result = a.name.localeCompare(b.name);
          break;

        case 'id':
          result = a.id - b.id;
          break;

        case 'height':
          result = a.height - b.height;
          break;

        case 'weight':
          result = a.weight - b.weight;
          break;

        case 'base_experience':
          result = a.base_experience - b.base_experience;
          break;

        default:
          result = 0;
      }
      return result * direction;
    });

    this.allPokemon = sorted;

    this.applyPaginationAndSort();
  }

  setSortDirection(direction: 'asc' | 'desc'): void {
    this.sortDirection = direction;
    this.sortPokemon(this.sortCriteria);
  }
  applyPaginationAndSort(): void {

    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;

    this.pokemonList = this.allPokemon.slice(start, end);
  }

  formatHeight(height: number): string {
    return `${height / 10} m`;
  }

  formatWeight(weight: number): string {
    return `${weight / 10} kg`;
  }

  nextPage(): void {
    if (this.currentPage < 26) {
      this.currentPage++;
      this.applyPaginationAndSort();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.applyPaginationAndSort();
    }
  }
}