import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { type ReactNode } from "react"

type ConfirmDialogProps = {
    title: string;
    description?: string;
    cancelText?: string;
    confirmText?: string;
    onConfirm: () => void;
    children: ReactNode;
}

const ConfirmDialog = ({ title, description, cancelText = 'Cancel', confirmText = 'Confirm', onConfirm, children }: ConfirmDialogProps) => {
    return <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                <AlertDialogAction onClick={onConfirm}>{confirmText}</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}

export default ConfirmDialog;