"use client";

import { Card } from "@/components/ui/card"
import Link from "next/link"
import ConfirmDialog from "../../confirm-dialog"
import { Button } from "../../ui/button"
import { deletePostTypeAction } from "@/server/actions/post-type.actions"
import { Edit2, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";
import { deletePromotionTypeAction } from "@/server/actions/promo-type.actions";

export default function PostTypeCard({ id, name, price, active, postType }: { id: string, name: string, price: number, active: boolean, postType: "post" | "promo" }) {

    const handleDelete = async () => {
        if (postType === 'post') {  
            await deletePostTypeAction({ id });
        } else {
            await deletePromotionTypeAction({ id });
        }
    }

    return (
        <div className="w-full flex justify-between items-stretch gap-4">
            <Card className="w-full p-6 flex justify-between items-center gap-4">
                <div className="grid gap-1">
                    <div className="text-lg font-semibold">{name}</div>
                    <div className="text-3xl font-bold">{formatCurrency(price)}</div>
                </div>


                <div className="flex flex-col gap-2 items-end">
                    <div className="flex items-center justify-end">
                        <div
                            className={cn(
                                "h-4 w-4 rounded-full",
                                active ? "bg-green-500" : "bg-red-500"
                            )}
                        />
                        <span className="ml-2 text-sm font-medium">{active ? "Active" : "Inactive"}</span>
                    </div>

                </div>
            </Card>
            <div className="flex flex-col gap-2">
                <Link href={`/admin/${postType}-types/edit/${id}`} className="flex-grow">
                    <Button variant="outline" className="w-full h-full"><Edit2 className="w-4 h-4" /></Button>
                </Link>
                <ConfirmDialog
                    title="Delete Post Type"
                    description="Are you sure you want to delete this post type?"
                    onConfirm={handleDelete}
                >
                    <Button variant="destructive" className="w-full flex-grow"><Trash2 className="w-4 h-4" /></Button>
                </ConfirmDialog>
            </div>
        </div>
    )
}