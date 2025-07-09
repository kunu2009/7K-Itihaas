import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, href, icon }: FeatureCardProps) {
  return (
    <Link href={href} className="group">
      <Card className="h-full transition-all duration-300 hover:border-primary hover:bg-muted/40 transform hover:-translate-y-1 hover:shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium font-headline">{title}</CardTitle>
          <div className="text-accent">{icon}</div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
        <div className="p-6 pt-0">
          <div className="text-sm font-medium flex items-center text-primary group-hover:underline">
            Start Learning <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
