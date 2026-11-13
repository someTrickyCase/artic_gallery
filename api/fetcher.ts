import { ArtType } from "@/types/types";

const API_URL = "https://api.artic.edu/api/v1/";

export default async function fetchData(query: string) {
    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Failed to load artworks");
    return (await res.json()).data as ArtType[];
}
