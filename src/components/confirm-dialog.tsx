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
    onConfirm: () => Promise<void>;
    children: ReactNode;
}

const ConfirmDialog = ({ title, description, cancelText = 'Cancel', confirmText = 'Confirm', onConfirm, children }: ConfirmDialogProps) => {

    const handleConfirm = async () => {
        await onConfirm();
    }

    return <AlertDialog>
        <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>{title}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                <AlertDialogAction onClick={handleConfirm}>{confirmText}</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
}

export default ConfirmDialog;