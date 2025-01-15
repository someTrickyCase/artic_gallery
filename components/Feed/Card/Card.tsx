import { ArtType, LanguageSwitcherType } from "@/types/types";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

import Image from "next/image";
import Link from "next/link";
import { DICTIONARY } from "@/settings/dictionary";

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
    const imageLink = `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`;

    const [isError, setIsError] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const { favorites, setSelectedArt } = useStore();

    useEffect(() => {
        favorites.map((favoriteItem) => {
            if (favoriteItem.id === artItem.id) setIsFavorite(true);
        });
    }, [favorites, artItem]);

    if (isError) return;
    return (
        <div
            className={`border border-foreground rounded-sm p-2 one-column h-fit ${
                index % 4 === 0 || index % 7 === 0 ? "md:col-span-2" : "md:col-span-1"
            }`}>
            <Link
                onClick={() => setSelectedArt(artItem)}
                href={{
                    pathname: `/arts/id=${id}`,
                }}>
                <Image
                    priority
                    src={imageLink}
                    alt={title}
                    className='w-fill'
                    width={640}
                    height={480}
                    onError={() => {
                        setIsError(true);
                    }}
                />
            </Link>
            <div className='one-column !gap-1 !items-start !text-start w-full px-2'>
                <p className='text-sm font-extralight'>
                    {artist_display ? artist_display : "unknown"}
                </p>
                <h2 className='bg-foreground text-background text-lg font-semibold'>{title}</h2>
                {isFavorite && (
                    <div className='self-start text-lg font-semibold bg-foreground text-background'>
                        {phrases["added"][language]}
                    </div>
                )}
            </div>
        </div>
    );
}
