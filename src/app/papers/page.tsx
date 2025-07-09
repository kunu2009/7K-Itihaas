import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { papers } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function PapersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold tracking-tight md:text-3xl">Previous Year Papers</h1>
        <p className="text-muted-foreground mt-1">Practice with past question papers to understand the exam pattern.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">HSC History Papers</CardTitle>
          <CardDescription>
            Review question papers from previous years with solutions and explanations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead className="hidden sm:table-cell">Board</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((paper) => (
                <TableRow key={paper.id}>
                  <TableCell className="font-medium">{paper.year}</TableCell>
                  <TableCell className="hidden sm:table-cell">{paper.board}</TableCell>
                   <TableCell className="hidden sm:table-cell">
                    {paper.questions.length > 0 ? (
                      <Badge>Available</Badge>
                    ) : (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm" disabled={paper.questions.length === 0}>
                      <Link href={paper.url}>
                        <BookOpen className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">View Paper</span>
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
