import { ArtType } from "@/types/types";

export default async function fetchData(query: string) {
    const res = await fetch(`/api/artic/${query}`);
    if (!res.ok) throw new Error("Failed to load artworks");
    return (await res.json()).data as ArtType[];
}
