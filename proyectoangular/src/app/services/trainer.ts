import { Injectable } from '@angular/core';
import { forkJoin, map, Observable, of } from 'rxjs';
import { PokemonService } from './pokemon';
import { PokemonMapperService } from './traduccion';
import { TRAINERS, TrainerData } from '../data/trainer';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(
    private pokemonService: PokemonService,
    private mapper: PokemonMapperService
  ) {}

  getTrainers(): Observable<Trainer[]> {
    return forkJoin(
      TRAINERS.map(t => this.loadTrainer(t))
    );
  }

  private loadTrainer(data: TrainerData): Observable<Trainer> {
    const requests = data.pokemonIds ?? [];
    if (!requests.length) {
      return of({
        name: data.name,
        category: data.category,
        description: data.description,
        team: []
      });
    }

    return forkJoin(
      requests.map(id =>
        this.pokemonService.getPokemonById(id)
      )
    ).pipe(
      map(team => ({
        name: data.name,
        category: data.category,
        description: data.description,
        team
      }))
    );
  }
}