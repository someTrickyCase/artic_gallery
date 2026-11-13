import { ArtType } from "@/types/types";

export default async function fetchData(query: string) {
    const res = await fetch(`/api/artic/${query}`);

    if (!res.ok) throw new Error("Failed to search artworks");
    const results = (await res.json()).data as { id: number }[];
    return Promise.all(results.map(async ({ id }) => {
        const detail = await fetch(`/api/artic/artworks/${id}`);
        if (!detail.ok) throw new Error("Failed to load a search result");
        return (await detail.json()).data as ArtType;
    }));
}
