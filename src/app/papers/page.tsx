import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { papers } from "@/lib/data"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

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
            Download question papers from previous years. All papers are for the Maharashtra Board HSC.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Year</TableHead>
                <TableHead className="hidden sm:table-cell">Board</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {papers.map((paper) => (
                <TableRow key={paper.id}>
                  <TableCell className="font-medium">{paper.year}</TableCell>
                  <TableCell className="hidden sm:table-cell">{paper.board}</TableCell>
                  <TableCell className="text-right">
                    <Button asChild variant="outline" size="sm">
                      <Link href={paper.url}>
                        <Download className="h-4 w-4 md:mr-2" />
                        <span className="hidden md:inline">Download</span>
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
