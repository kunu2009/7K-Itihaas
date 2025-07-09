import { notFound } from 'next/navigation';
import { chapters } from '@/lib/data';
import { QuizClient } from '@/components/QuizClient';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function QuizPage({ params }: { params: { chapterId: string } }) {
  const chapter = chapters.find(c => c.id === params.chapterId);

  if (!chapter || chapter.quiz.length === 0) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <Button asChild variant="ghost" className="mb-4">
          <Link href={`/${chapter.id}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Chapter {chapter.id}
          </Link>
        </Button>
        <h1 className="text-4xl font-bold font-headline tracking-tight">Quiz: {chapter.title}</h1>
        <p className="text-lg text-muted-foreground mt-2">Test your understanding of the chapter.</p>
      </div>
      <QuizClient questions={chapter.quiz} />
    </div>
  );
}
