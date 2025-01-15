import SearchPage from "@/pages/SearchPage";

export default async function page(prop: { searchParams: Promise<{ query: string }> }) {
    const searchQuery = await prop.searchParams;

    return (
        <main>
            <SearchPage query={searchQuery.query} />
        </main>
    );
}
