import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../services/pokemon';
import { forkJoin, map, Observable } from 'rxjs';
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

  private questionFactories: QuestionFactory[] = [
    () => this.createGuessThePokemonQuestion(),
    () => this.createGuessTheTypeQuestion(),
    () => this.createGuessTheAbilityQuestion()
  ];

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

  createQuestion() {
    const randomIndex = Math.floor(
      Math.random() * this.questionFactories.length
    );

    return this.questionFactories[randomIndex]();
  }

  createGuessTheAbilityQuestion() {
    const ids = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 1025) + 1
    );

    return forkJoin(
      ids.map(id =>
        this.pokemonService.getPokemonById(id).pipe(
          map(p => this.mapper.mapPokemon(p))
        )
      )
    ).pipe(
      map((pokemons: Pokemon[]) => {

        const getRandomAbility = (p: Pokemon) => {
          const abilities = p.abilities ?? [];
          if (!abilities.length) return null;

          const randomIndex = Math.floor(Math.random() * abilities.length);
          return abilities[randomIndex]?.ability?.name;
        };

        const rawOptions = pokemons
          .map(p => getRandomAbility(p))
          .filter(Boolean);

        const options = rawOptions.map(a => this.mapper.mapAbility(a));

        const correctAbility = options[0];

        return {
          question: '¿Cuál de estas habilidades tiene este Pokémon?',
          image: pokemons[0].sprite,
          options: this.shuffle(options),
          answer: correctAbility
        };
      }))
  }

  mapTypes(p: Pokemon): string {
    return (p.types ?? [])
      .map(t => this.mapper.mapType(t.type.name))
      .sort()
      .join(' / ');
  }

  createGuessTheTypeQuestion() {

    const ids = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 1025) + 1
    );

    return forkJoin(
      ids.map(id =>
        this.pokemonService.getPokemonById(id).pipe(
          map(p => this.mapper.mapPokemon(p))
        )
      )
    ).pipe(
      map((pokemons: Pokemon[]) => {

        const correct = pokemons[0];

        const rawOptions = this.shuffle(
          Array.from(
            new Set(
              pokemons.map(p => this.mapTypes(p))
            )
          )
        );

        const answer = this.mapTypes(correct);

        const uniqueOptions = Array.from(new Set(rawOptions));

        if (!uniqueOptions.includes(answer)) {
          uniqueOptions.push(answer);
        }

        const options = this.shuffle(uniqueOptions);

        return {
          question: '¿Cuál es la combinación de tipos de este Pokémon?',
          image: correct.sprite,
          options,
          answer
        };
      })
    );
  }

  createGuessThePokemonQuestion() {
    const ids = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 1025) + 1
    );

    return forkJoin(
      ids.map(id =>
        this.pokemonService.getPokemonById(id).pipe(
          map(p => this.mapper.mapPokemon(p))
        )
      )
    ).pipe(
      map((pokemons: Pokemon[]) => {

        const correctPokemon = pokemons[0];

        return {
          question: '¿Qué Pokémon es este?',
          image: correctPokemon.sprite,
          options: this.shuffle(pokemons.map(p => p.name)),
          answer: correctPokemon.name
        };
      })
    );
  }

  shuffle(array: string[]): string[] {
    return array.sort(() => Math.random() - 0.5);
  }

  get question(): QuizQuestion | null {
    return this.questions[this.currentQuestion] ?? null;
  }

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

type QuestionFactory = () => Observable<QuizQuestion>;

export interface QuizQuestion {
  question: string;
  image: string;
  options: string[];
  answer: string;
}