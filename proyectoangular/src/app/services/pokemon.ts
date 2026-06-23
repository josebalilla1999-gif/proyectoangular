import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbilityVM, EvolutionNode } from '../pokemondetail/pokemondetail';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Lista de pokémon
  getPokemonList(limit: number = 50, offset: number = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  // Detalle de un Pokémon
  getPokemon(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${name}`);
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${id}`);
  }

  getPokemonSpecies(name: string) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );
  }

  getEvolutionChain(url: string) {
    return this.http.get<any>(url);
  }
}

export interface Pokemon {
  sprite: string;
  name: string;
  types: any[];
  abilities: any[];
  height: number;
  weight: number;
  stats: any[];
  base_experience: number;
  species: {
    name: string;
    url: string;
  };
}

export interface PokemonDetailVM {
  pokemon: Pokemon;
  weaknesses: string[];
  strengths: string[];
  immunities: string[];
  abilities: AbilityVM[];
  description: string;
  evolutionTree: EvolutionNode;
}