import { Pokemon } from "../services/pokemon";

export interface Trainer {
  id: number;
  name: string;
  category: string,
  description: string;
  team: Pokemon[];
}