import { SearchPage } from "@/components/gallery/GalleryPage";

export default async function page(prop: { searchParams: Promise<{ query: string }> }) {
    const searchQuery = await prop.searchParams;

    return <SearchPage query={searchQuery.query ?? ""} />;
}
