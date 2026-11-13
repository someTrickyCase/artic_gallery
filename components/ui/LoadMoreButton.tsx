import { useState } from "react";
import { ArtType, LanguageSwitcherType } from "@/types/types";

import { DICTIONARY } from "@/settings/dictionary";
import SonnerSmall from "../shared/SonnerSmall";
import styles from "./Controls.module.css";

const phrases = DICTIONARY["feedMessages"];

export default function LoadMoreButton({
    loader,
    sizeToLoad,
    language,
}: {
    loader: (size: number | ((_size: number) => number)) => Promise<ArtType[][] | undefined>;
    sizeToLoad: number;
    language: LanguageSwitcherType;
}) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <button
            className={`${styles.button} self-end`}
            onClick={async () => {
                setIsLoading(true);
                try {
                    await loader(sizeToLoad + 1);
                } finally {
                    setIsLoading(false);
                }
            }}>
            {isLoading ? <SonnerSmall /> : <p>{phrases["loadButtonPhrases"][language]}</p>}
        </button>
    );
}
