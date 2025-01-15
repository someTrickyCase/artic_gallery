import { useEffect, useState } from "react";
import { ArtType, LanguageSwitcherType } from "@/types/types";

import { DICTIONARY } from "@/settings/dictionary";
import SonnerSmall from "../shared/SonnerSmall";

const phrases = DICTIONARY["feedMessages"];

export default function LoadMoreButton({
    loader,
    sizeToLoad,
    language,
    data,
}: {
    loader: (size: number | ((_size: number) => number)) => Promise<ArtType[][] | undefined>;
    sizeToLoad: number;
    language: LanguageSwitcherType;
    data: ArtType[][];
}) {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [data]);

    return (
        <button
            className='button self-end'
            onClick={() => {
                setIsLoading(true);
                return loader(sizeToLoad + 1);
            }}>
            {isLoading ? <SonnerSmall /> : <p>{phrases["loadButtonPhrases"][language]}</p>}
        </button>
    );
}
