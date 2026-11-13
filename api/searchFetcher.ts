import { ArtType } from "@/types/types";

const API_URL = "https://api.artic.edu/api/v1/";

export default async function fetchData(query: string) {
    const res = await fetch(`${API_URL}${query}`);

    if (!res.ok) throw new Error("Failed to search artworks");
    const results = (await res.json()).data as { api_link: string }[];
    return Promise.all(results.map(async ({ api_link }) => {
        const detail = await fetch(api_link);
        if (!detail.ok) throw new Error("Failed to load a search result");
        return (await detail.json()).data as ArtType;
    }));
}
