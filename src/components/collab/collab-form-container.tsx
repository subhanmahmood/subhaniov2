"use client";

import { type PostType, type PromotionType } from "prisma/generated/zod";
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "../ui/button";
import { formatCurrency } from "@/lib/currency";
import React from 'react';
import { discountConfig } from '@/config/discounts';
import { applyDiscounts } from '@/lib/discounts';
import { CollabFormItem } from "./collab-form-item";
import { Card, CardTitle } from "../ui/card";

export type CollabPost = {
    postType: PostType;
    promotionTypes: PromotionType[];
    reuseRights: boolean;
}

function encodePostsForUrl(posts: CollabPost[]): string {
    return posts.map(post => {
        const parts = [post.postType.staticId];
        if (post.promotionTypes.length > 0) {
            parts.push(post.promotionTypes.map(pt => pt.staticId).join(','));
        }
        if (post.reuseRights) {
            parts.push('REUSE');
        }
        return parts.join('+');
    }).join(';');
}

function decodePostsFromUrl(encodedPosts: string, postTypes: PostType[], promotionTypes: PromotionType[]): CollabPost[] {
    return encodedPosts.split(';').map(encodedPost => {
        const parts = encodedPost.split('+');
        const postType = postTypes.find(pt => pt.staticId === parts[0])!;
        const promotionTypeIds = parts[1] ? parts[1].split(',') : [];
        const promotionTypesForPost = promotionTypes.filter(pt => promotionTypeIds.includes(pt.staticId));
        const reuseRights = parts.includes('REUSE');
        return { postType, promotionTypes: promotionTypesForPost, reuseRights };
    });
}

export default function CollabFormContainer({ postTypes, promotionTypes }: { postTypes: PostType[], promotionTypes: PromotionType[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [posts, setPosts] = useState<CollabPost[]>(() => {
        const postsParam = searchParams.get('posts');
        if (postsParam) {
            try {
                return decodePostsFromUrl(postsParam, postTypes, promotionTypes);
            } catch (error) {
                console.error('Error parsing posts from URL:', error);
                return [];
            }
        }
        return [];
    });
    const [openPostIndex, setOpenPostIndex] = useState<number | null>(null);

    const encodedPosts = useMemo(() => encodePostsForUrl(posts), [posts]);

    const handleAddPost = useCallback(() => {
        if (postTypes.length === 0 || promotionTypes.length === 0) return;

        const newPost: CollabPost = {
            postType: postTypes[0]!,
            promotionTypes: [promotionTypes[0]!],
            reuseRights: false
        };

        setPosts(prevPosts => {
            const updatedPosts = [...prevPosts, newPost];
            setOpenPostIndex(updatedPosts.length - 1);
            return updatedPosts;
        });
    }, [postTypes, promotionTypes]);

    const handleRemovePost = useCallback((index: number) => {
        setPosts(prevPosts => prevPosts.filter((_, i) => i !== index));
        setOpenPostIndex(null);
    }, []);

    const handleOpenChange = useCallback((index: number, isOpen: boolean) => {
        setOpenPostIndex(isOpen ? index : null);
    }, []);

    const updatePost = useCallback((index: number, updatedPost: CollabPost) => {
        setPosts(prevPosts => {
            const newPosts = [...prevPosts];
            newPosts[index] = updatedPost;
            return newPosts;
        });
    }, []);

    useEffect(() => {
        const currentEncodedPosts = searchParams.get('posts');
        if (encodedPosts !== currentEncodedPosts) {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set('posts', encodedPosts);
            router.push(`?${newSearchParams.toString()}`, { scroll: false });
        }
    }, [encodedPosts, router, searchParams]);

    const { totalOriginalPrice, totalDiscountedPrice } = useMemo(() => {
        return posts.reduce((acc, post) => {
            const { original, discounted } = applyDiscounts(
                post.postType,
                post.promotionTypes,
                post.reuseRights,
                promotionTypes,
                discountConfig
            );

            acc.totalOriginalPrice += original;
            acc.totalDiscountedPrice += discounted;

            return acc;
        }, { totalOriginalPrice: 0, totalDiscountedPrice: 0 });
    }, [posts, promotionTypes]);

    return (
        <div className="relative flex flex-col h-full max-w-md mx-auto mt-8">
            <div className="flex-grow px-4 pb-8 mx-4 overflow-y-auto">
                <div className="flex flex-col gap-2 mb-4">
                    <h1 className="text-2xl font-bold">Let&apos;s work</h1>
                    <p className="text-sm text-gray-500">Let&apos;s work together to create something great.</p>
                </div>
                <div className="flex flex-col gap-4">
                    {posts.map((post, index) => (
                        <CollabFormItem
                            key={`post-${post.postType.staticId}-${index}`}
                            post={post}
                            postTypes={postTypes}
                            promotionTypes={promotionTypes}
                            removePost={() => handleRemovePost(index)}
                            onOpenChange={(isOpen) => handleOpenChange(index, isOpen)}
                            isOpen={index === openPostIndex}
                            updatePost={(updatedPost) => updatePost(index, updatedPost)}
                        />
                    ))}
                    <div className="flex flex-col items-center justify-center w-full gap-2 mt-4 border border-gray-200 rounded-md">
                        <Button
                            className="my-4"
                            onClick={handleAddPost}
                            variant="secondary"
                            size="xs"
                        >
                            Add post
                        </Button>
                    </div>
                </div>
            </div>
            <Card className="sticky bottom-6 mx-6 bg-white border-t p-4 border-gray-200">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl text-gray-500">Total Price:</CardTitle>
                    <div className="text-right">
                        {totalOriginalPrice !== totalDiscountedPrice && (
                            <span className="mr-2 text-lg text-gray-400 line-through">
                                {formatCurrency(totalOriginalPrice)}
                            </span>
                        )}
                        <span className="text-2xl font-bold">
                            {formatCurrency(totalDiscountedPrice)}
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    );
}