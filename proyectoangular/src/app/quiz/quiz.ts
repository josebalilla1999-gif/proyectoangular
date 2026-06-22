import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon';
import { forkJoin, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PokemonMapperService } from '../services/traduccion';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz implements OnInit {

  questions: QuizQuestion[] = [];

  currentQuestion = 0;
  score = 0;
  finished = false;
  loading = true;

  constructor(
    private pokemonService: PokemonService,
    private mapper: PokemonMapperService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.generateQuestions(10);
  }

  resetQuiz(): void {
    this.questions = [];
    this.currentQuestion = 0;
    this.score = 0;
    this.finished = false;
    this.loading = true;

    this.generateQuestions(10);
  }

  // ==============================
  // GENERAR TODAS LAS PREGUNTAS
  // ==============================
  generateQuestions(count: number): void {

    const requests = Array.from({ length: count }).map(() =>
      this.createQuestion()
    );

    forkJoin(requests).subscribe({
      next: (questions) => {
        this.questions = questions;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error generando quiz:', err);
        this.loading = false;
      }
    });
  }

  // ==============================
  // UNA PREGUNTA
  // ==============================
  createQuestion() {

    const ids = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 1025) + 1
    );

    return forkJoin(
      ids.map(id =>
        this.pokemonService.getPokemonById(id).pipe(
          map(p => this.mapper.mapPokemon(p)) // 👈 AQUÍ EL MAGIC
        )
      )
    ).pipe(
      map((pokemons: Pokemon[]) => {

        const correctPokemon = pokemons[0];

        return {
          question: '¿Qué Pokémon es este?',
          image: correctPokemon.sprite, // 👈 YA NO FALLA
          options: this.shuffle(pokemons.map(p => p.name)),
          answer: correctPokemon.name
        };
      })
    );
  }

  // ==============================
  // SHUFFLE
  // ==============================
  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  // ==============================
  // ACTUAL PREGUNTA
  // ==============================
  get question(): QuizQuestion | null {
    return this.questions[this.currentQuestion] ?? null;
  }

  // ==============================
  // RESPONDER
  // ==============================
  answer(option: string): void {

    if (!this.question) return;

    if (option === this.question.answer) {
      this.score++;
    }

    this.nextQuestion();
  }

  nextQuestion(): void {

    this.currentQuestion++;

    if (this.currentQuestion >= this.questions.length) {
      this.finished = true;
    }
  }
}

// ==============================
// MODELO
// ==============================
export interface QuizQuestion {
  question: string;
  image: string;
  options: string[];
  answer: string;
}