import { cn } from "@/lib/utils";

import Link from "next/link";

export default function LinkButton({
    linkTo,
    children,
    className,
}: {
    linkTo: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <Link className={cn("button group", className)} href={linkTo}>
            {children}
        </Link>
    );
}
