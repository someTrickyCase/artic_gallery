import { ArtType, LanguageSwitcherType } from "@/types/types";
import { useStore } from "@/store/useStore";

import { cn } from "@/lib/utils";

import { DICTIONARY } from "@/settings/dictionary";
import styles from "../ui/Controls.module.css";

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
    const { addFavorites, removeFromFavorites, favorites } = useStore();
    const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === artItem.id);

    return (
        <button type='button'
            onClick={() => {
                if (!isFavorite) {
                    addFavorites(artItem);
                    return;
                }
                if (isFavorite) {
                    removeFromFavorites(artItem);
                    return;
                }
            }}
            className={cn(
                styles.button,
                isFavorite && styles.selected,
                className
            )}>
            <p className={`centered rounded-sm regular-font lowercase w-full h-full `}>
                {!isFavorite && phrases["add"][language]}
                {isFavorite && phrases["added"][language]}
            </p>
        </button>
    );
}
