'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { generateChapterSummary } from '@/ai/flows/generate-chapter-summary';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface SummaryClientProps {
  chapterText: string;
  chapterNumber: number;
}

export function SummaryClient({ chapterText, chapterNumber }: SummaryClientProps) {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsLoading(true);
    setSummary('');
    try {
      const result = await generateChapterSummary({ chapterText, chapterNumber });
      if (result.summary) {
        setSummary(result.summary);
      } else {
        throw new Error("Failed to generate summary.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not generate summary. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">AI-Powered Chapter Summary</CardTitle>
          <CardDescription>Click the button to generate a concise summary of the chapter using AI.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateSummary} disabled={isLoading} size="lg" className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Summary
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {isLoading && (
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-center flex-col gap-4 text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p>The AI is reading the chapter and preparing your summary...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {summary && (
        <Card className="animate-in fade-in-50">
          <CardHeader>
            <CardTitle className="font-headline text-xl">Generated Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-stone dark:prose-invert max-w-none font-body">
              {summary.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
