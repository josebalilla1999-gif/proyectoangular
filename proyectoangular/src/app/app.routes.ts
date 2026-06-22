import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon';
import { PokemonDetailComponent } from './pokemondetail/pokemondetail';
import { Quiz } from './quiz/quiz';

export const routes: Routes = [
    {
        path: 'pokemon',
        component: PokemonComponent
    },
    {
        path: 'pokemon/:name',
        component: PokemonDetailComponent
    },
    {
        path: 'quiz',
        component: Quiz
    }
];
