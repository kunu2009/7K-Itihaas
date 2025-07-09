import { ChapterCard } from "@/components/ChapterCard";
import { AllFlashcardsWidget } from "@/components/AllFlashcardsWidget";
import { chapters } from "@/lib/data";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-headline font-bold tracking-tight md:text-3xl">Dashboard</h1>
      <p className="text-muted-foreground mt-1">Select a chapter to start learning.</p>
      
      <div className="mt-8">
        <AllFlashcardsWidget />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
}
