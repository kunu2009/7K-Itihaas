import { notFound } from 'next/navigation';
import { chapters } from '@/lib/data';
import { SummaryClient } from '@/components/SummaryClient';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function SummaryPage({ params }: { params: { chapterId: string } }) {
  const chapter = chapters.find(c => c.id === params.chapterId);

  if (!chapter) {
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
        <h1 className="text-4xl font-bold font-headline tracking-tight">AI Summary: {chapter.title}</h1>
      </div>
      <SummaryClient 
        chapterText={chapter.content}
        chapterNumber={parseInt(chapter.id, 10)}
      />
    </div>
  );
}
