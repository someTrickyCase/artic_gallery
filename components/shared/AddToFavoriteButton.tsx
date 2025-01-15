import { ArtType, LanguageSwitcherType } from "@/types/types";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

import { cn } from "@/lib/utils";

import { DICTIONARY } from "@/settings/dictionary";

const phrases = DICTIONARY["addToFavoriteButtonPhrases"];

export default function AddToFavoriteButton({
    className,
    language,
    artItem,
}: {
    className?: string;
    language: LanguageSwitcherType;
    artItem: ArtType;
}) {
    const [isFavorite, setIsFavorite] = useState(false);
    const { addFavorites, removeFromFavorites, favorites } = useStore();

    useEffect(() => {
        favorites.map((favoriteItem) => {
            if (favoriteItem.id === artItem.id) setIsFavorite(true);
        });
    }, [favorites, artItem]);

    return (
        <div
            onClick={() => {
                if (!isFavorite) {
                    addFavorites(artItem);
                    return setIsFavorite(true);
                }
                if (isFavorite) {
                    removeFromFavorites(artItem);
                    return setIsFavorite(false);
                }
            }}
            className={cn(
                `cursor-pointer button ${
                    isFavorite ? "!text-background bg-foreground" : undefined
                }`,
                className
            )}>
            <p className={`centered rounded-sm regular-font lowercase w-full h-full `}>
                {!isFavorite && phrases["add"][language]}
                {isFavorite && phrases["added"][language]}
            </p>
        </div>
    );
}
