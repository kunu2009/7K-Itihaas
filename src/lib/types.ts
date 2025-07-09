export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  content: string;
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
}

export interface PaperQuestion {
  question: string;
  solution: string;
  explanation: string;
}

export interface Paper {
  id: string;
  year: number;
  board: string;
  url: string;
  questions: PaperQuestion[];
}
