import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerService } from '../services/trainer';
import { BattleService } from '../services/battle';
import { Trainer } from '../models/trainer';
import { Pokemon } from '../services/pokemon';
import { BattleResult } from '../models/battle';

@Component({
  selector: 'app-team-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teambuilder.html',
  styleUrl: './teambuilder.css'
})
export class TeamBuilderComponent implements OnInit {

  trainers: Trainer[] = [];
  selectedTrainer?: Trainer;

  team: Pokemon[] = [];
  battleResult?: BattleResult;

  constructor(
    private trainerService: TrainerService,
    private battleService: BattleService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.trainerService.getTrainers()
      .subscribe({
        next: (data) => {
          console.log('TRAINERS OK', data);
          this.trainers = data;
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err)
      });
  }

  selectTrainer(t: Trainer) {
    this.selectedTrainer = t;
  }

  selectTrainerByName(event: Event) {
    const id = Number((event.target as HTMLSelectElement).value);
    this.selectedTrainer = this.trainers.find(t => t.id == id);
  }

  selectPokemon(p: Pokemon) {
    const exists = this.team.some(x => x.name === p.name);
    if (exists) {
      this.team = this.team.filter(x => x.name !== p.name);
    } else if (this.team.length < 6) {
      this.team.push(p);
    }
  }

  getRows(team: any[]): any[][] {
    const rows = [];
    for (let i = 0; i < team.length; i += 3) {
      rows.push(team.slice(i, i + 3));
    }
    return rows;
  }

  fight() {
    if (!this.selectedTrainer || this.team.length !== 6) return;
    this.battleResult = this.battleService.calculateBattle(
      this.team,
      this.selectedTrainer
    );
  }
}