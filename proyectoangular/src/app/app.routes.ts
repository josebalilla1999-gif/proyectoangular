import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon';
import { PokemonDetailComponent } from './pokemondetail/pokemondetail';
import { Quiz } from './quiz/quiz';
import { Index } from './index';

export const routes: Routes = [
    {
        path: '',
        component: Index
    },
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
