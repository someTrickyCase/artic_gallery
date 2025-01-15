import { ArtType } from "@/types/types";

const API_URL = "https://api.artic.edu/api/v1/";

export default async function fetchData(query: string) {
    const res = await fetch(`${API_URL}${query}`);

    // search requesr returns api links to searhed items. So need to fetch it,
    // and  return an array with fetched items

    const linksArray: string[] = [];
    [...(await res.json()).data].map((item) => {
        linksArray.push(item.api_link);
    });

    const data: ArtType[] = [];
    for (let i = 0; i < linksArray.length; i++) {
        const res = await fetch(linksArray[i]);
        data.push((await res.json()).data);
    }

    return data as ArtType[];
}
