import fetchData from "@/api/fetcher";
import useSWRInfinite from "swr/infinite";

import { ArtType } from "@/types/types";

export function useArts() {
    const getKey = (pageIndex: number, prevPageData: ArtType[]) => {
        if (prevPageData && !prevPageData.length) return null;
        return `artworks?page=${pageIndex + 1}&limit=25`;
    };

    return useSWRInfinite<ArtType[]>(getKey, fetchData);
}
