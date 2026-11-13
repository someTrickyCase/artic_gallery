import ArtworkDetail from "@/components/gallery/ArtworkDetail";

export default async function page({ params }: { params: Promise<{ artid: string }> }) {
    const { artid } = await params;
    return <ArtworkDetail id={artid} />;
}
