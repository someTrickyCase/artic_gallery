import type { Metadata } from "next";
import "@/design-system/global.css";

export const metadata: Metadata = {
    title: "ARTIC Gallery",
    description: "A considered way to explore the Art Institute of Chicago collection.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
