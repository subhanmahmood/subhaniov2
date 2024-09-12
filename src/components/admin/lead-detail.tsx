'use client'

import { Button } from '@/components/ui/button';
import { type Lead } from '@prisma/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export function LeadDetail({ lead }: { lead: Lead }) {
  const router = useRouter();

  const handleCreateQuote = () => {
    // Navigate to quote builder page
    router.push(`/admin/quotes/new?leadId=${lead.id}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{lead.name}</h2>
        <Link href="/admin/leads">
          <Button variant="outline">Back to List</Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">Contact Information</h3>
          <p>Email: {lead.email}</p>
          {/* <p>Phone: {lead.phone}</p>
          <p>Company: {lead.company}</p> */}
        </div>
        <div>
          <h3 className="font-semibold">Status</h3>
          {/* <p>{lead.status}</p> */}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Interaction History</h3>
        {/* Add interaction history component here */}
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Associated Documents</h3>
        {/* Add associated documents component here */}
      </div>
      <div className="mt-6">
        <Button onClick={handleCreateQuote}>Create Quote</Button>
      </div>
    </div>
  );
}