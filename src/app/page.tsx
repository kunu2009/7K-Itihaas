import { ChapterCard } from "@/components/ChapterCard";
import { AllFlashcardsWidget } from "@/components/AllFlashcardsWidget";
import { chapters } from "@/lib/data";

export default function Dashboard() {
  // Mock progress data for demonstration
  const progressData = [100, 60, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div>
      <h1 className="text-3xl font-headline font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground mt-1">Select a chapter to start learning.</p>
      
      <div className="mt-8">
        <AllFlashcardsWidget />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {chapters.map((chapter, index) => (
          <ChapterCard key={chapter.id} chapter={chapter} progress={progressData[index]} />
        ))}
      </div>
    </div>
  );
}
