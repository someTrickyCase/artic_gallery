import { ArtType, LanguageSwitcherType } from "@/types/types";
import { useState } from "react";
import { useStore } from "@/store/useStore";

import Image from "next/image";
import Link from "next/link";
import { DICTIONARY } from "@/settings/dictionary";
import styles from "./Card.module.css";

const phrases = DICTIONARY["addToFavoriteButtonPhrases"];

export default function Card({
    artItem,
    language,
    index,
}: {
    artItem: ArtType;
    language: LanguageSwitcherType;
    index: number;
}) {
    const { image_id, artist_display, title, id } = artItem;
    const imageLink = image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg` : null;

    const [isError, setIsError] = useState(false);
    const { favorites, setSelectedArt } = useStore();
    const isFavorite = favorites.some((favoriteItem) => favoriteItem.id === id);

    return (
        <div
            className={`${styles.card} ${index % 4 === 0 || index % 7 === 0 ? styles.wide : ""}`}>
            <Link
                onClick={() => setSelectedArt(artItem)}
                href={{
                    pathname: `/arts/${id}`,
                }}>
                {imageLink && !isError ? <Image
                    unoptimized
                    priority
                    src={imageLink}
                    alt={title}
                    className={styles.image}
                    width={640}
                    height={480}
                    onError={() => {
                        setIsError(true);
                    }}
                /> : <div className={styles.imageFallback} role='img' aria-label={`Image unavailable for ${title}`}>Image unavailable</div>}
            </Link>
            <div className={styles.details}>
                <p className={styles.artist}>
                    {artist_display ? artist_display : "unknown"}
                </p>
                <h2 className={styles.label}>{title}</h2>
                {isFavorite && (
                    <div className={styles.label}>
                        {phrases["added"][language]}
                    </div>
                )}
            </div>
        </div>
    );
}
