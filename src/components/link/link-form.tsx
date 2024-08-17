"use client"
import { type z } from 'zod';
import { useForm } from "react-hook-form";
import { type Category, type Link as DBLink } from '@prisma/client';
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { createLinkAction, updateLinkAction } from '@/server/actions/link.actions';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { linkFormSchema, type Nullable } from '@/lib/schema';

export default function LinkForm({ id, link, categories }: { id?: string, link?: Nullable<DBLink>, categories?: Nullable<Category[]> }) {
    const isEditing = !!link && id;

    const router = useRouter()

    const form = useForm<z.infer<typeof linkFormSchema>>({
        resolver: zodResolver(linkFormSchema),
        defaultValues: {
            name: '',
            url: '',
            categoryId: '',
            addCategory: ''
        },
    })

    useEffect(() => {
        if (link) {
            form.reset(link)
        }
    }, [link, form])



    const onSubmit = async (values: z.infer<typeof linkFormSchema>) => {
        console.log('Form submitted with values:', values)
        try {
            if (isEditing) {
                await updateLinkAction({ id, values });
                console.log('Link updated successfully')
            } else {
                console.log('Calling createLinkAction')
                const result = await createLinkAction({ values })
                console.log('createLinkAction result:', result)
            }
            setTimeout(() => {
                router.push('/links')
            }, 500)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    const addCategoryFieldValue = form.watch('addCategory')
    const disableCategorySelect = Boolean(addCategoryFieldValue) || !categories


    return <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder='Name' {...field} />
                    </FormControl>
                </FormItem>
            )} />
            <FormField control={form.control} name="url" render={({ field }) => (
                <FormItem>
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                        <Input placeholder='URL' {...field} />
                    </FormControl>
                </FormItem>
            )} />
            <FormField
                control={form.control}
                name="categoryId"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select disabled={disableCategorySelect} onValueChange={field.onChange} defaultValue={link?.categoryId} >
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {categories?.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
                            </SelectContent>
                        </Select>

                    </FormItem>
                )
                }
            />
            <p className='text-xs text-slate-500 text-center my-1'>OR</p>
            <FormField control={form.control} name="addCategory" render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input placeholder='Add Category' {...field} />
                    </FormControl>
                    <FormDescription>
                        You can create new categories via the field above.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <Button type='submit' className="w-full mt-4">{`${isEditing ? 'Save' : 'Add'} link`}</Button>
        </form>

    </Form>
}
