'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Chapter 1', score: 100 },
  { name: 'Chapter 2', score: 60 },
  { name: 'Chapter 3', score: 25 },
  { name: 'Chapter 4', score: 0 },
  { name: 'Chapter 5', score: 0 },
  { name: 'Chapter 6', score: 0 },
  { name: 'Chapter 7', score: 0 },
  { name: 'Chapter 8', score: 0 },
  { name: 'Chapter 9', score: 0 },
  { name: 'Chapter 10', score: 0 },
  { name: 'Chapter 11', score: 0 },
  { name: 'Chapter 12', score: 0 },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold tracking-tight md:text-3xl">Your Progress</h1>
        <p className="text-muted-foreground mt-1">Track your quiz scores and chapter completion.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Quiz Scores</CardTitle>
          <CardDescription>
            A summary of your performance on chapter quizzes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <XAxis
                dataKey="name"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                cursor={{ fill: 'hsl(var(--muted))' }}
                contentStyle={{ 
                    background: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius)'
                }}
              />
              <Bar dataKey="score" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
