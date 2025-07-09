'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { RefreshCw } from 'lucide-react';

interface FlashcardProps {
  term: string;
  definition: string;
}

export function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full h-80 perspective-1000" onClick={handleFlip}>
      <div
        className={cn(
          'relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer',
          isFlipped ? 'rotate-y-180' : ''
        )}
      >
        {/* Front of the card */}
        <div className="absolute w-full h-full backface-hidden">
          <Card className="w-full h-full flex flex-col items-center justify-center p-6 bg-card">
            <CardContent className="text-center">
              <p className="text-muted-foreground text-sm">Term</p>
              <p className="text-2xl lg:text-3xl font-bold font-headline mt-2">{term}</p>
            </CardContent>
            <div className="absolute bottom-4 right-4 text-muted-foreground flex items-center gap-2 text-xs">
                <RefreshCw className="h-3 w-3" />
                Click to flip
            </div>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full flex flex-col items-center justify-center p-6 bg-accent text-accent-foreground">
             <CardContent className="text-center">
              <p className="text-accent-foreground/80 text-sm">Definition</p>
              <p className="text-lg lg:text-xl font-body mt-2">{definition}</p>
            </CardContent>
             <div className="absolute bottom-4 right-4 text-accent-foreground/80 flex items-center gap-2 text-xs">
                <RefreshCw className="h-3 w-3" />
                Click to flip
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
