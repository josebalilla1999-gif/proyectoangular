import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class TypeService {

  constructor(private http: HttpClient) {}

  getType(type: string) {
    return this.http.get<any>(
      `https://pokeapi.co/api/v2/type/${type}`
    );
  }
}

export interface PokemonDetailVM {
  pokemon: Pokemon;
  weaknesses: string[];
  strengths: string[];
  immunities: string[];
  abilities: {
    name: string;
    description: string;
  }[];
}

export interface PokemonDetailPageVM {
  pokemon: PokemonDetailVM;
  weaknesses: string[];
  strengths: string[];
  immunities: string[];
  abilities: {
    name: string;
    description: string;
  }[];
}