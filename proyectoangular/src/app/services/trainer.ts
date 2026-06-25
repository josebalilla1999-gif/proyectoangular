import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { PokemonService } from './pokemon';
import { PokemonMapperService } from './traduccion';
import { TRAINERS, TrainerData } from '../data/trainer';
import { Trainer } from '../models/trainer';

@Injectable({ providedIn: 'root' })

export class TrainerService {

    constructor(
        private pokemonService: PokemonService,
        private mapper: PokemonMapperService
    ) { }

    getTrainers(): Observable<Trainer[]> {
        return forkJoin(
            TRAINERS.map(trainer =>
                this.loadTrainer(trainer)
            )
        );
    }

    private loadTrainer(
        data: TrainerData
    ): Observable<Trainer> {
        return forkJoin(
            data.pokemonIds.map(id =>
                this.pokemonService
                    .getPokemonById(id)
                    .pipe(
                        map(p =>
                            this.mapper.mapPokemon(p)))))
            .pipe(
                map(team => {
                    return {
                        name: data.name,
                        category: data.category,
                        description: data.description,
                        team: team
                    };
                })
            );
    }

    getTrainerByName(
        name: string
    ): Observable<Trainer | undefined> {
        return this.getTrainers()
            .pipe(
                map(trainers =>
                    trainers.find(
                        t => t.name === name
                    )
                )
            );
    }
}