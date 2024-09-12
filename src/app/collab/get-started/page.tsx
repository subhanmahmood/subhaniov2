import { type Metadata } from 'next'
import LeadCollectionForm from '@/components/lead-collection/lead-collection-form'

export const metadata: Metadata = {
  title: 'Get Started - Your Company Name',
  description: 'Tell us about your project and get started with our services.',
}

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Get Started with Your Project</h1>
      <p className="text-gray-600 mb-8">
        We&apos;re excited to learn about your project! Fill out the form below, and we&apos;ll get back to you shortly.
      </p>
      <LeadCollectionForm />
    </div>
  )
}