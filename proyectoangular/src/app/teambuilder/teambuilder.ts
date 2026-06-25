import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerService } from '../services/trainer';
import { Trainer } from '../models/trainer';
import { Pokemon } from '../services/pokemon';

@Component({
  selector: 'app-team-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teambuilder.html',
  styleUrl: './teambuilder.css'
})

export class TeamBuilder implements OnInit {
  trainers: Trainer[] = [];
  selectedTrainer?: Trainer;
  team: Pokemon[] = [];

  constructor(private trainerService: TrainerService) { }

  ngOnInit() {
    this.trainerService
      .getTrainers()
      .subscribe(data => {
        this.trainers = data;
      });
  }

  selectPokemon(pokemon: Pokemon) {
    const exists =
      this.team.some(
        p => p.name === pokemon.name
      );
    if (exists) {
      this.team =
        this.team.filter(
          p => p.name !== pokemon.name
        );
    }
    else if (this.team.length < 6) {
      this.team.push(pokemon);
    }
  }

  selectTrainer(trainer: Trainer) {
    this.selectedTrainer = trainer;
  }
}