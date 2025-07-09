'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';

interface QuizClientProps {
  questions: QuizQuestion[];
}

export function QuizClient({ questions }: QuizClientProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer !== null) return; 

    setSelectedAnswer(answer);
    const correct = answer === questions[activeQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  }

  if (showResult) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="items-center">
            <Award className="h-16 w-16 text-primary"/>
          <CardTitle className="font-headline text-3xl">Quiz Completed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg">Your Score:</p>
          <p className="text-4xl md:text-5xl font-bold font-headline text-primary">{((score / questions.length) * 100).toFixed(0)}%</p>
          <p className="text-muted-foreground mt-2">You answered {score} out of {questions.length} questions correctly.</p>
        </CardContent>
        <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full">
                <RotateCw className="mr-2 h-4 w-4" />
                Try Again
            </Button>
        </CardFooter>
      </Card>
    );
  }

  const question = questions[activeQuestion];
  const progress = ((activeQuestion + 1) / questions.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="mb-4">
            <p className="text-sm text-muted-foreground">Question {activeQuestion + 1} of {questions.length}</p>
            <Progress value={progress} className="w-full mt-1" />
        </div>
        <CardTitle className="font-headline text-2xl leading-snug">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option;
          const variant = isSelected 
            ? (isCorrect ? 'correct' : 'incorrect') 
            : (selectedAnswer !== null && option === question.correctAnswer ? 'correct' : 'default');

          return (
            <Button
              key={option}
              onClick={() => handleSelectAnswer(option)}
              disabled={selectedAnswer !== null}
              variant="outline"
              className={cn(
                "w-full justify-start h-auto py-3 text-left whitespace-normal",
                variant === 'correct' && "bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200 hover:bg-green-200",
                variant === 'incorrect' && "bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200 hover:bg-red-200"
              )}
            >
              {option}
            </Button>
          );
        })}
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4">
        {selectedAnswer && (
          <div className={cn(
            "p-4 rounded-md flex items-start gap-3 animate-in fade-in-50",
            isCorrect ? "bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200"
          )}>
            {isCorrect ? <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" /> : <XCircle className="h-5 w-5 mt-0.5 shrink-0" />}
            <div>
              <p className="font-bold">{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              <p className="text-sm mt-1">{question.explanation}</p>
            </div>
          </div>
        )}
        <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
          {activeQuestion < questions.length - 1 ? 'Next Question' : 'Show Results'}
        </Button>
      </CardFooter>
    </Card>
  );
}
