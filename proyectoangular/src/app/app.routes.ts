import { Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon';
import { PokemonDetailComponent } from './pokemondetail/pokemondetail';

export const routes: Routes = [
    {
        path: 'pokemon',
        component: PokemonComponent
    },
    {
        path: 'pokemon/:name',
        component: PokemonDetailComponent
    }
];
