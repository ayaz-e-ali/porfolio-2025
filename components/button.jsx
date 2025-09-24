import { cn } from "@/utils";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "text-sm lg:text-lg font-sans font-bold px-4 py-2 rounded-lg transition border-foreground border hover:cursor-pointer",
    {
        variants: {
            variant: {
                primary: "bg-foreground text-background hover:brightness-95",
                outline: "hover:bg-neutral-900 hover:text-neutral-100",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export function Button({ variant, className, children, ...props }) {
    return (
        <button className={cn(buttonVariants({ variant, className }))} {...props}>
            {children}
        </button>
    );
}