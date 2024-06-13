"use client"

import { z } from 'zod';
import { useForm } from "react-hook-form";
import { type Link as DBLink } from '@prisma/client';
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

import Link from 'next/link';
import { createLink, editLink, getLink, getLinks } from '@/server/actions/link.actions';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

export const linkFormSchema = z.object({
    name: z.string().min(1),
    url: z.string().min(1),
    category: z.string().optional(),
    addCategory: z.string().optional()
})

export default function LinkForm({ id }: { id?: string }) {
    const [loaded, setLoaded] = useState(false);
    const [link, setLink] = useState<DBLink>()
    const [categories, setCategories] = useState<string[]>([])

    const isEditing = loaded && !!link;

    const router = useRouter()

    useEffect(() => {
        const getDbLinks = async () => {
            const links = await getLinks()
            const dbCategories = Array.from(new Set([...links.map(link => link.category)])).filter(cat => !!cat)
            setCategories(dbCategories)
        }
        void getDbLinks();
    }, [setCategories])

    const form = useForm<z.infer<typeof linkFormSchema>>({
        resolver: zodResolver(linkFormSchema),
        defaultValues: {
            name: '',
            url: '',
            category: ''
        },
    })

    useEffect(() => {
        const getDBLink = async () => {
            if (id) {
                const link = await getLink(Number(id));
                console.log(link)
                if (link) {
                    setLink(link)
                    form.reset(link)
                }
            }
            setLoaded(true);
        }
        void getDBLink();
    }, [setLink, id, form])

    const onSubmit = (values: z.infer<typeof linkFormSchema>) => {
        console.log(values)
        if (isEditing) {
            void editLink(Number(id), values);
        } else {
            void createLink(values)
        }
        setTimeout(() => {
            router.push('/links')
        }, 500)
    }



    if (!loaded) return <p>Loading</p>

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
                name="category"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select disabled={Boolean(!categories.length)} onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {categories.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                            </SelectContent>
                        </Select>

                    </FormItem>
                )}
            />
            <p className='text-xs text-slate-500 text-center my-1'>OR</p>
            <FormField control={form.control} name="addCategory" render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input placeholder='Add Category' {...field} />
                    </FormControl>
                    <FormDescription>
                        You can manage email addresses in your{" "}
                        <Link href="/examples/forms">email settings</Link>.
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )} />
            <Button type='submit' className="w-full mt-4">{`${isEditing ? 'Save' : 'Add'} link`}</Button>
        </form>

    </Form>
}
