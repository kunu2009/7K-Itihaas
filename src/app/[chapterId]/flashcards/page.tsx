'use client';

import { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { chapters } from '@/lib/data';
import { Flashcard } from '@/components/Flashcard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FlashcardsPage() {
  const params = useParams();
  const chapterId = params.chapterId as string;
  const chapter = chapters.find(c => c.id === chapterId);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!chapter || chapter.flashcards.length === 0) {
    notFound();
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % chapter.flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + chapter.flashcards.length) % chapter.flashcards.length);
  };

  const currentFlashcard = chapter.flashcards[currentIndex];

  return (
    <div className="space-y-8">
      <div>
        <Button asChild variant="ghost" className="mb-4">
          <Link href={`/${chapter.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapter {chapter.id}
          </Link>
        </Button>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Flashcards: {chapter.title}</h1>
        <p className="text-lg text-muted-foreground mt-2">Review key terms for this chapter.</p>
      </div>
      
      <div className="w-full max-w-2xl mx-auto">
        <Flashcard 
            key={currentIndex}
            term={currentFlashcard.term}
            definition={currentFlashcard.definition}
        />
        <div className="flex items-center justify-between mt-6">
          <Button variant="outline" onClick={handlePrev}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <p className="text-muted-foreground font-medium">
            Card {currentIndex + 1} of {chapter.flashcards.length}
          </p>
          <Button variant="outline" onClick={handleNext}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
