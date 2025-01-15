import { cn } from "@/lib/utils";

export default function BentoGrid({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "grid md:auto-rows-max grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 min-w-[90vw] mx-auto justify-between items-center",
                className
            )}>
            {children}
        </div>
    );
}
