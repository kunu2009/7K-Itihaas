import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { Chapter } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface ChapterCardProps {
  chapter: Chapter;
}

export function ChapterCard({ chapter }: ChapterCardProps) {
  return (
    <Link href={`/${chapter.id}`} className="group">
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
        <CardFooter>
            <div className="text-sm font-medium flex items-center text-primary group-hover:underline">
                Read Chapter <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
