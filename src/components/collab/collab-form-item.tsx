"use client";

import { type PostType, type PromotionType } from "prisma/generated/zod";
import { useMemo, useEffect } from 'react';
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { formatCurrency } from "@/lib/currency";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { X } from "lucide-react";
import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { discountConfig } from '@/config/discounts';
import { applyDiscounts } from '@/lib/discounts';
import { collabFormItemSchema } from "@/lib/schema";
import { type CollabPost } from "./collab-form-container";


export type CollabFormItemProps = {
    post: CollabPost;
    postTypes: PostType[];
    promotionTypes: PromotionType[];
    removePost: () => void;
    onOpenChange: (isOpen: boolean) => void;
    isOpen: boolean;
    updatePost: (updatedPost: CollabPost) => void;
}

export const CollabFormItem = React.memo(function CollabFormItem({
    post,
    postTypes,
    promotionTypes,
    removePost,
    onOpenChange,
    isOpen,
    updatePost,
}: CollabFormItemProps) {
    const methods = useForm({
        resolver: zodResolver(collabFormItemSchema),
        defaultValues: {
            postType: post.postType.staticId,
            promotionTypes: post.promotionTypes.map(pt => pt.staticId),
            reuseRights: post.reuseRights,
        },
        mode: "onChange",
    });

    const { watch } = methods;

    useEffect(() => {
        const subscription = watch((data) => {
            if (data.postType && data.promotionTypes) {
                const updatedPostType = postTypes.find(pt => pt.staticId === data.postType);
                if (!updatedPostType) {
                    console.error('Invalid post type selected');
                    return;
                }
                const updatedPost = {
                    ...post,
                    postType: updatedPostType,
                    promotionTypes: promotionTypes.filter(pt => data.promotionTypes?.includes(pt.staticId)),
                    reuseRights: data.reuseRights ?? false,
                };
                updatePost(updatedPost);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch, post, postTypes, promotionTypes, updatePost]);

    const watchedValues = watch();

    const { original: originalCost, discounted: discountedCost } = useMemo(() => {
        const selectedPostType = postTypes.find(pt => pt.staticId === watchedValues.postType);
        const selectedPromotionTypes = promotionTypes.filter(pt => watchedValues.promotionTypes.includes(pt.staticId));

        if (!selectedPostType) return { original: 0, discounted: 0 };

        return applyDiscounts(
            selectedPostType,
            selectedPromotionTypes,
            watchedValues.reuseRights,
            promotionTypes,
            discountConfig
        );
    }, [watchedValues, postTypes, promotionTypes]);

    const handleRemovePost = () => {
        removePost();
    };

    return (
        <Collapsible open={isOpen} onOpenChange={onOpenChange}>
            <Card className="relative group">
                <Button
                    variant="ghost"
                    className="absolute z-10 inline-flex items-center justify-center w-8 h-8 p-0 text-red-500 transition-all rounded-full opacity-0 -right-3 -top-3 group-hover:border group-hover:bg-muted group-hover:opacity-100 group-hover:outline-muted-foreground"
                    onClick={handleRemovePost}
                >
                    <X className="w-4 h-4 transition-colors " />
                </Button>
                <CollapsibleTrigger asChild>
                    <CardHeader className="p-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex-grow cursor-pointer">
                                <CardTitle className="flex items-center justify-between mb-2">
                                    {post.postType?.name}
                                </CardTitle>
                                {post.promotionTypes.length || post.reuseRights ? (
                                    <CardDescription>
                                        {post.promotionTypes.length > 0 && `${post.promotionTypes.map(p => p.name).join(', ')}`}
                                        {post.reuseRights && `${post.promotionTypes.length > 0 ? ' + ' : ''}Re-use rights`}
                                    </CardDescription>
                                ) : (
                                    <CardDescription className="text-red-500">No promotion type selected</CardDescription>
                                )}
                            </div>
                            <div className="flex flex-col items-end">
                                {originalCost !== discountedCost && (
                                    <span className="mr-1 text-base line-through text-muted-foreground">
                                        {formatCurrency(originalCost)}
                                    </span>
                                )}
                                <span className="text-2xl font-semibold leading-none tracking-tight">
                                    {formatCurrency(discountedCost)}
                                </span>
                            </div>
                        </div>
                    </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <CardContent className="p-4 pt-0">
                        <FormProvider {...methods}>
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={methods.control}
                                    name="postType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Post Type</FormLabel>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                                className="grid grid-cols-3 gap-4"
                                            >
                                                {postTypes.map((postType) => (
                                                    <Label
                                                        key={postType.staticId}
                                                        htmlFor={`postType-${postType.staticId}`}
                                                        className={cn('border cursor-pointer rounded-md p-4 flex flex-col items-center justify-between gap-2', field.value === postType.staticId && 'bg-muted')}
                                                    >
                                                        <RadioGroupItem id={`postType-${postType.staticId}`} value={postType.staticId} />
                                                        <div className="text-center">{postType.name}</div>
                                                        <div className="flex items-center gap-2">
                                                            <div className="text-sm text-muted-foreground">{formatCurrency(postType.price)}</div>
                                                        </div>
                                                    </Label>
                                                ))}
                                            </RadioGroup>
                                            <FormMessage>{methods.formState.errors.postType?.message}</FormMessage>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={methods.control}
                                    name="promotionTypes"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Promotion Type</FormLabel>
                                            <div className="grid w-full grid-cols-2 gap-4">
                                                {promotionTypes.map((promotionType) => (
                                                    <Label
                                                        key={promotionType.staticId}
                                                        htmlFor={`promotionType-${promotionType.staticId}`}
                                                        className={cn('flex flex-col items-center justify-between gap-2 border cursor-pointer rounded-md p-4 w-full', field.value.includes(promotionType.staticId) && 'bg-muted')}
                                                    >
                                                        <Checkbox
                                                            id={`promotionType-${promotionType.staticId}`}
                                                            checked={field.value.includes(promotionType.staticId)}
                                                            onCheckedChange={(checked) => {
                                                                const updatedValue = checked
                                                                    ? [...field.value, promotionType.staticId]
                                                                    : field.value.filter((v: string) => v !== promotionType.staticId);
                                                                field.onChange(updatedValue);
                                                            }}
                                                        />
                                                        <div className="text-center">{promotionType.name}</div>
                                                        <div className="flex items-center gap-1">
                                                            {watchedValues.promotionTypes.length === promotionTypes.length && (
                                                                <div className="text-sm line-through text-slate-400">
                                                                    {formatCurrency(promotionType.price)}
                                                                </div>
                                                            )}
                                                            <div className="text-sm text-muted-foreground">
                                                                {formatCurrency(watchedValues.promotionTypes.length === promotionTypes.length ? promotionType.price * 0.9 : promotionType.price)}
                                                            </div>
                                                        </div>
                                                    </Label>
                                                ))}
                                            </div>
                                            <FormMessage>{methods.formState.errors.promotionTypes?.message}</FormMessage>
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={methods.control}
                                    name="reuseRights"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-center justify-between p-4 mt-2 border rounded-lg">
                                            <div className="space-y-0.5">
                                                <FormLabel className="flex items-center justify-between text-base">
                                                    <span>Re-use rights</span>
                                                    <div>
                                                        {watchedValues.promotionTypes.length === promotionTypes.length && field.value && (
                                                            <span className="mr-2 line-through text-slate-400">
                                                                {formatCurrency(200)}
                                                            </span>
                                                        )}
                                                        <span className="text-base">
                                                            {formatCurrency(
                                                                watchedValues.promotionTypes.length === promotionTypes.length && field.value
                                                                    ? discountConfig.reuseRights.withAllPromotionTypes.value
                                                                    : 200
                                                            )}
                                                        </span>
                                                    </div>
                                                </FormLabel>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-sm text-muted-foreground">
                                                        Select this if you want to re-use the content for future posts.
                                                    </p>
                                                    <div className="flex items-center">

                                                        <Switch
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </FormProvider>
                    </CardContent>
                </CollapsibleContent>
            </Card>
        </Collapsible>
    );
});