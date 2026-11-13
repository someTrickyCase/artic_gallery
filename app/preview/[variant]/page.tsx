import { notFound } from "next/navigation";
import PreviewGallery from "../PreviewGallery";
import { previewVariants, type PreviewVariant } from "../artworks";

export function generateStaticParams() { return previewVariants.map(({ slug }) => ({ variant: slug })); }

export default async function PreviewPage({ params }: { params: Promise<{ variant: string }> }) {
    const { variant } = await params;
    if (!previewVariants.some(({ slug }) => slug === variant)) notFound();
    return <PreviewGallery variant={variant as PreviewVariant} />;
}
