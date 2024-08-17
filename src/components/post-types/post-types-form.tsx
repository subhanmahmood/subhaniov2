'use client';

import { type Nullable, postTypeFormSchema } from "@/lib/schema";
import { type PostType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { createPostTypeAction, updatePostTypeAction } from "@/server/actions/post-type.actions";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";


export default function PostTypeForm({ id, postType }: { id?: string, postType?: Nullable<PostType> }) {
    const isEditing = !!postType && id;

    const router = useRouter()

    const form = useForm<z.infer<typeof postTypeFormSchema>>({
        resolver: zodResolver(postTypeFormSchema),
        defaultValues: {
            name: '',
            price: 0,
            id: '',
            active: false
        },
    })

    useEffect(() => {
        if (postType) {
            form.reset(postType)
        }
    }, [postType, form])

    const onSubmit = async (values: z.infer<typeof postTypeFormSchema>) => {
        console.log('Form submitted with values:', values)
        
        try {
            if (isEditing) {
                await updatePostTypeAction(values);
                console.log('PostType updated successfully')
            } else {
                console.log('Calling createPostTypeAction')
                const result = await createPostTypeAction(values)
                console.log('createPostTypeAction result:', result)
            }
            setTimeout(() => {
                router.push('/admin/post-types')
            }, 500)
        } catch (error) {
            console.error('Error submitting form:', error)
        }
    }

    return <Form {...form}>
        <form className="flex flex-col gap-2" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                        <Input placeholder='Name' {...field} />
                    </FormControl>
                </FormItem>
            )} />
            <FormField control={form.control} name="price" render={({ field }) => (
                <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                        <Input type="number" placeholder='Price' {...field} />
                    </FormControl>
                </FormItem>
            )} />
            <Button type='submit' className="w-full mt-4">{`${isEditing ? 'Save' : 'Add'} post type`}</Button>
        </form>

    </Form>
}