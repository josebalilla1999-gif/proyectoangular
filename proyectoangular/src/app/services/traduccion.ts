import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonMapperService {

  private typeMap: Record<string, string> = {
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    bug: 'Bicho',
    normal: 'Normal',
    flying: 'Volador',
    poison: 'Veneno',
    dragon: 'Dragón',
    psychic: 'Psíquico',
    dark: 'Siniestro',
    ghost: 'Fantasma',
    fighting: 'Lucha',
    fairy: 'Hada',
    rock: 'Roca',
    steel: 'Acero',
    ground: 'Tierra',
    ice: 'Hielo'
  };

  private abilityMap: Record<string, string> = {
    overgrow: 'Espesura',
    blaze: 'Mar de Llamas',
    torrent: 'Torrente',
    'shield-dust': 'Polvo Escudo',
    'shed-skin': 'Mudar',
    'compound-eyes': 'Ojo Compuesto',
    swarm: 'Enjambre',
    'keen-eye': 'Vista Lince',
    'run-away': 'Fuga',
    intimidate: 'Intimidación',
    static: 'Electricidad Estática'
  };

  mapPokemon(p: any): Pokemon {
    return {
      ...p,

      sprite: p.sprites?.front_default,

      // tipos traducidos
      types: p.types.map((t: any) => ({
        ...t,
        type: {
          name: this.typeMap[t.type.name] ?? t.type.name
        }
      })),

      // habilidades traducidas
      abilities: p.abilities.map((a: any) => ({
        ...a,
        ability: {
          name: this.abilityMap[a.ability.name] ?? a.ability.name
        }
      })),

      height: p.height,
      weight: p.weight
    };
  }
}