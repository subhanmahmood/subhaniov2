"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useRouter } from 'next/navigation'
import { leadCollectionFormSchema } from '@/lib/schema'
import { type z } from 'zod'
import { createLeadAction } from '@/server/actions/lead.actions'
import { toast } from '@/components/ui/use-toast'

export default function LeadCollectionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof leadCollectionFormSchema>>({
    resolver: zodResolver(leadCollectionFormSchema),
    defaultValues: {
      email: "",
      name: "",
      companyName: "",
      projectDescription: "",
    },
    mode: "onChange", // Add this line to enable onChange validation
  })

  async function onSubmit(values: z.infer<typeof leadCollectionFormSchema>) {
    setIsSubmitting(true)
    try {
      await createLeadAction(values)
      toast({
        title: "Success",
        description: "Your information has been submitted successfully.",
      })
      router.push('/thank-you')
    } catch (error) {
      console.error('Error submitting lead:', error)
      toast({
        title: "Error",
        description: "There was a problem submitting your information. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormDescription>
                We&apos;ll use this email to contact you about your project.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your Company" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Briefly describe your project and any specific requirements.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Submitting..." : "Get Started"}
        </Button>
      </form>
    </Form>
  )
}