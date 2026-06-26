import { Injectable } from '@angular/core';
import { Pokemon } from '../services/pokemon';
import { Trainer } from '../models/trainer';
import { BattleResult } from '../models/battle';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  calculateBattle(
    playerTeam: Pokemon[],
    enemy: Trainer
  ): BattleResult {

    let score = 50;
    const reasons: string[] = [];

    playerTeam.forEach(player => {
      enemy.team.forEach(opponent => {
        player.types.forEach((t: any) => {
          const type = t.type?.name ?? t.name;
          if (opponent.weaknesses.includes(type)) {
            score += 4;
          }
          if (opponent.strengths.includes(type)) {
            score -= 4;
          }
          if (opponent.immunities.includes(type)) {
            score -= 6;
          }
        });
      });
    });
    const playerPower = playerTeam
      .reduce((a, p) =>
        a + p.stats.reduce((s: any, x: any) => s + x.base_stat, 0)
      , 0);
    const enemyPower = enemy.team
      .reduce((a, p) =>
        a + p.stats.reduce((s: any, x: any) => s + x.base_stat, 0)
      , 0);
    score += (playerPower - enemyPower) / 80;
    score = Math.max(5, Math.min(95, score));
    if (score > 60) reasons.push('Ventaja de tipos');
    if (score > 50) reasons.push('Buen balance de estadísticas');
    if (score < 40) reasons.push('Desventaja clara');

    return {
      winChance: Math.round(score),
      loseChance: 100 - Math.round(score),
      reasons
    };
  }
}