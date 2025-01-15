import fetchData from "@/api/searchFetcher";
import useSWRInfinite from "swr/infinite";

import { ArtType } from "@/types/types";

export function useSearchedArts(query: string) {
    const getKey = (pageIndex: number, prevPageData: ArtType[]) => {
        if (prevPageData && !prevPageData.length) return null;
        return `artworks/search/?q=${query}&page=${pageIndex + 1}&limit=12`;
    };

    return useSWRInfinite<ArtType[]>(getKey, fetchData);
}
