import LeadList from "@/components/admin/lead-list";
import { PageHeader } from "@/components/page-header";
import { getLeadsAction } from "@/server/actions/lead.actions";

export default async function AdminLeadsPage() {
  const [leads] = await getLeadsAction()
  return (
    <div className="container">
      <PageHeader title="Leads" />
      <LeadList leads={leads ?? []} />
    </div>
  )
}