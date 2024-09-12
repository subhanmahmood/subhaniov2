'use client';

import { postTypeFormSchema } from "@/lib/schema";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../../ui/button";
import { Switch } from "../../ui/switch";


export default function EditTypeForm({ id, name, staticId, price, active, order, submitAction, successPath }: { id?: string, name?: string, staticId?: string, price?: number, active?: boolean, order?: number, submitAction: (values: z.infer<typeof postTypeFormSchema>) => Promise<void>, successPath: string }) {
    const isEditing = !!id;

    const router = useRouter()

    const form = useForm<z.infer<typeof postTypeFormSchema>>({
        resolver: zodResolver(postTypeFormSchema),
        defaultValues: {
            name: name ?? '',
            staticId: staticId ?? '',
            price: price ?? 0,
            id: id ?? '',
            active: active ?? false,
            order: order ?? 0
        },
    })

    useEffect(() => {
        if (id) {  // If we're editing (id exists), reset the form with all fields
            console.log('resetting form with staticId', staticId)
            form.reset({ name, staticId, price, id, active, order })
        }
    }, [name, staticId, price, id, active, order, form])

    const onSubmit = async (values: z.infer<typeof postTypeFormSchema>) => {
        console.log('Form submitted with values:', values)

        try {
            await submitAction(values)
            if (successPath) {
                setTimeout(() => {
                    router.push(successPath)
                }, 500)
            }
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
            <FormField control={form.control} name="staticId" render={({ field }) => (
                <FormItem>
                    <FormLabel>Static ID</FormLabel>
                    <FormControl>
                        <Input placeholder='STATIC_ID' {...field} />
                    </FormControl>
                    <FormDescription>
                        Use uppercase letters, numbers, and underscores only (e.g., INSTAGRAM, TIKTOK)
                    </FormDescription>
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

            <FormField
                control={form.control}
                name="active"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 mt-2">
                        <div className="space-y-0.5">
                            <FormLabel className="text-base">
                                Active
                            </FormLabel>
                            <FormDescription>
                                Whether this post type is active.
                            </FormDescription>
                        </div>
                        <FormControl>
                            <Switch
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <Button type='submit' className="w-full mt-4">{`${isEditing ? 'Save' : 'Add'} post type`}</Button>
        </form>

    </Form>
}