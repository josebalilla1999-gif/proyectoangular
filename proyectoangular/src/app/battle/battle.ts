import { Component } from '@angular/core';

export interface BattleResult {
  winChance: number;
  loseChance: number;
  reasons: string[];
}

@Component({
  selector: 'app-battle',
  imports: [],
  templateUrl: './battle.html',
  styleUrl: './battle.css',
})

export class BattleComponent {}