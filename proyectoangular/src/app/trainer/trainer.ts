import { Component } from '@angular/core';
import { TrainerService } from '../services/trainer';
import { Trainer } from '../models/trainer';

@Component({
  selector: 'app-trainer',
  imports: [],
  templateUrl: './trainer.html',
  styleUrl: './trainer.css',
})

export class TrainerComponent {
  trainers: Trainer[] = [];


  constructor(
    private trainerService: TrainerService
  ) { }


  ngOnInit() {
    this.trainerService
      .getTrainers()
      .subscribe(data => {
        this.trainers = data;
      });
  }
}