import { Pokemon } from "../services/pokemon";

export interface Trainer {
  name: string;
  category: string,
  description: string;
  team: Pokemon[];
}