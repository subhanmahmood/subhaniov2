"use client"

import { deleteLeadAction } from '@/server/actions/lead.actions'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { type Lead } from '@prisma/client'

export default function LeadList({ leads }: { leads: Lead[] }) {

  async function handleDelete(id: string) {
    try {
      await deleteLeadAction({ id })
      toast({
        title: "Success",
        description: "Lead deleted successfully.",
      })
    } catch (error) {
      console.error('Error deleting lead:', error)
      toast({
        title: "Error",
        description: "Failed to delete lead. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Project Description</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow key={lead.id}>
            <TableCell>{lead.name}</TableCell>
            <TableCell>{lead.email}</TableCell>
            <TableCell>{lead.companyName ?? 'N/A'}</TableCell>
            <TableCell>{lead.projectDescription.substring(0, 50)}...</TableCell>
            <TableCell>{new Date(lead.createdAt).toLocaleDateString()}</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(lead.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}