import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Chapter } from "@/lib/types";

interface ChapterCardProps {
  chapter: Chapter;
  progress: number;
}

export function ChapterCard({ chapter, progress }: ChapterCardProps) {
  return (
    <Link href={`/${chapter.id}`}>
      <Card className="h-full flex flex-col hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-xl leading-tight">
            <span className="text-primary mr-2">Chapter {chapter.id}:</span>
            {chapter.title}
          </CardTitle>
          <CardDescription className="font-body">{chapter.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {/* Content can be added here if needed */}
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2">
            <div className="w-full">
                <p className="text-sm text-muted-foreground mb-1">Progress</p>
                <Progress value={progress} aria-label={`${progress}% complete`} />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
