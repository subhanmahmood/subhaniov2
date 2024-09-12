import { LeadDetail } from '@/components/admin/lead-detail';
import { getLeadAction } from '@/server/actions/lead.actions';
import { notFound } from 'next/navigation';

export default async function LeadDetailPage({ params }: { params: { id: string } }) {
  const [lead, error] = await getLeadAction({ id: params.id });

  if (error ?? !lead) {
    notFound();
  }

  return (
    <div>
      <h1>Lead Details</h1>
      <LeadDetail lead={lead} />
    </div>
  );
}