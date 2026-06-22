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

  selectedTypes: Set<string> = new Set<string>();
  filteredList: Pokemon[] = [];

  toggleType(type: string, event: any): void {

    if (event.target.checked) {
      this.selectedTypes.add(type);
    } else {
      this.selectedTypes.delete(type);
    }

    this.applyFiltersAndPagination();
  }

  applyFiltersAndPagination(): void {

    let data = this.allPokemon;

    // 🔍 FILTRO POR NOMBRE
    if (this.searchText.trim()) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }

    // 🧪 FILTRO POR TIPOS
    if (this.selectedTypes.size > 0) {
      data = data.filter(p =>
        p.types.some((t: any) =>
          this.selectedTypes.has(t.type.name)
        )
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

  getStatValue(pokemon: Pokemon, statName: string): number {

  return pokemon.stats?.find(
    (s: any) => s.stat.name === statName
  )?.base_stat ?? 0;

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

        case 'hp':
          result =
          this.getStatValue(a, 'hp') -
          this.getStatValue(b, 'hp');
        break;

        case 'attack':
          result =
          this.getStatValue(a, 'attack') -
          this.getStatValue(b, 'attack');
        break;

        case 'defense':
          result =
          this.getStatValue(a, 'defense') -
          this.getStatValue(b, 'defense');
        break;

        case 'special-attack':
          result =
          this.getStatValue(a, 'special-attack') -
          this.getStatValue(b, 'special-attack');
        break;

        case 'special-defense':
          result =
          this.getStatValue(a, 'special-defense') -
          this.getStatValue(b, 'special-defense');
        break;

        case 'speed':
          result =
          this.getStatValue(a, 'speed') -
          this.getStatValue(b, 'speed');
        break;

        default:
          result = 0;
      }
      return result * direction;
    });

    this.allPokemon = sorted;

    this.applyFiltersAndPagination();
  }

  setSortDirection(direction: 'asc' | 'desc'): void {
    this.sortDirection = direction;
    this.sortPokemon(this.sortCriteria);
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
      this.applyFiltersAndPagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.applyFiltersAndPagination();
    }
  }
  translateType(type: string): string {
    return this.mapper.typeMap[type] ?? '-';
  }
  translateAbility(name: string): string {
    return this.mapper.abilityMap[name] ?? name;
  }
}