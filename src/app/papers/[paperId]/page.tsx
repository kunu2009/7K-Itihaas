import { notFound } from 'next/navigation';
import Link from 'next/link';
import { papers } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export async function generateStaticParams() {
  return papers.map((paper) => ({
    paperId: paper.id,
  }));
}

export default function PaperDetailsPage({ params }: { params: { paperId: string } }) {
  const paper = papers.find(p => p.id === params.paperId);

  if (!paper || paper.questions.length === 0) {
    // You can create a more specific "not available" page later
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/papers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Papers
          </Link>
        </Button>
        <h1 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">HSC History Paper: {paper.year}</h1>
        <p className="text-lg text-muted-foreground mt-2">Questions, solutions, and explanations.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Questions</CardTitle>
          <CardDescription>
            Review the questions from the {paper.year} Maharashtra Board HSC History paper. Click on a question to reveal its solution and explanation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {paper.questions.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  Q{index + 1}: {item.question}
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-semibold text-primary mb-2">Solution:</h4>
                    <p className="font-body text-base leading-relaxed">{item.solution}</p>
                  </div>
                   <div className="p-4 bg-muted/50 rounded-lg border">
                    <h4 className="font-semibold text-accent mb-2">Explanation:</h4>
                    <p className="font-body text-base leading-relaxed">{item.explanation}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
