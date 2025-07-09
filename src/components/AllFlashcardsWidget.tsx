'use client';

import { useState, useEffect } from 'react';
import type { Flashcard as FlashcardType } from '@/lib/types';
import { chapters } from '@/lib/data';
import { Flashcard } from '@/components/Flashcard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, BookCopy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type FlashcardWithChapter = FlashcardType & { chapterTitle: string };

export function AllFlashcardsWidget() {
  const [shuffledFlashcards, setShuffledFlashcards] = useState<FlashcardWithChapter[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const allFlashcards = chapters.flatMap(chapter => 
        chapter.flashcards.map(fc => ({...fc, chapterTitle: chapter.title}))
    );

    // Fisher-Yates shuffle
    for (let i = allFlashcards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allFlashcards[i], allFlashcards[j]] = [allFlashcards[j], allFlashcards[i]];
    }
    
    setShuffledFlashcards(allFlashcards);
    setCurrentIndex(0); // Start from the first shuffled card
    setIsHydrated(true);
  }, []);


  if (shuffledFlashcards.length === 0) {
    return (
        <Card className="mb-8">
            <CardHeader className='flex flex-row items-center gap-4'>
                <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                    <BookCopy className="h-6 w-6" />
                </div>
                <div>
                    <CardTitle className="font-headline text-2xl">Daily Flashcard Review</CardTitle>
                    <CardDescription>
                      {isHydrated ? "No flashcards available to review." : "Loading flashcards..."}
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % shuffledFlashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + shuffledFlashcards.length) % shuffledFlashcards.length);
  };

  const currentFlashcard = shuffledFlashcards[currentIndex];

  return (
    <Card className="mb-8">
        <CardHeader className='flex flex-row items-center gap-4'>
            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-lg">
                <BookCopy className="h-6 w-6" />
            </div>
            <div>
                <CardTitle className="font-headline text-2xl">Daily Flashcard Review</CardTitle>
                <CardDescription>A random flashcard from all chapters to help you study.</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
            <div className="w-full max-w-2xl mx-auto">
                <Flashcard 
                    key={currentIndex}
                    term={currentFlashcard.term}
                    definition={currentFlashcard.definition}
                />
                <div className="flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
                  <Button variant="outline" onClick={handlePrev} className="w-full md:w-auto">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                  </Button>
                  <div className="text-center order-first md:order-none">
                    <p className="text-muted-foreground font-medium">
                      Card {currentIndex + 1} of {shuffledFlashcards.length}
                    </p>
                    <p className="text-xs text-muted-foreground/80 truncate">
                      From: {currentFlashcard.chapterTitle}
                    </p>
                  </div>
                  <Button variant="outline" onClick={handleNext} className="w-full md:w-auto">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
