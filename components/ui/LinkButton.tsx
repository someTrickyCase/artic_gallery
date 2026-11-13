import { cn } from "@/lib/utils";

import Link from "next/link";
import styles from "./Controls.module.css";

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
        <Link className={cn(styles.button, "group", className)} href={linkTo}>
            {children}
        </Link>
    );
}
