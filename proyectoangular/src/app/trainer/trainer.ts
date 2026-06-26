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


  ngOnInit(): void {
    this.trainerService.getTrainers()
      .subscribe({
        next: (data) => {
          console.log('TRAINERS OK', data);
          this.trainers = data;
        },
        error: (err) => console.error(err)
      });
  }
}