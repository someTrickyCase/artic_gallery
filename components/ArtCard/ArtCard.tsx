"use client";

import parse from "html-react-parser";
import { useStore } from "@/store/useStore";

import { LanguageSwitcherType } from "@/types/types";

import Image from "next/image";
import { DICTIONARY } from "@/settings/dictionary";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { ArtType } from "@/types/types";
import { useState } from "react";
import AddToFavoriteButton from "../shared/AddToFavoriteButton";

const phrases = DICTIONARY.pageDescriptionMessages;

export default function ArtCard({ language }: { language: LanguageSwitcherType }) {
    const [failedImageId, setFailedImageId] = useState<string | null>(null);
    const { selectedArt } = useStore();
    const params = useParams<{ artid: string }>();
    const id = Number(params?.artid);
    const { data: fetchedArt, error } = useSWR<ArtType>(Number.isInteger(id) && id > 0 ? String(id) : null, async (artId: string) => {
        const response = await fetch(`https://api.artic.edu/api/v1/artworks/${artId}`);
        if (!response.ok) throw new Error("Failed to load artwork");
        return (await response.json()).data as ArtType;
    });
    const art = selectedArt?.id === id ? selectedArt : fetchedArt;
    if (error || !Number.isInteger(id) || id <= 0) return <p>Artwork could not be loaded.</p>;
    if (!art) return <p>Loading artwork…</p>;

    const {
        title,
        image_id,
        credit_line,
        artist_display,
        description,
        date_display,
        artwork_type_title,
        exhibition_history,
        place_of_origin,
    } = art;

    const imageLink = image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg` : null;

    return (
        <div className='pt-20 pb-10 one-column w-full !gap-5 overflow-y-scroll no-scrollbar'>
            <h1
                custom-attribute={title}
                className={`special-font text-start !text-4xl before:content-[attr(custom-attribute)]`}>
                {title}
            </h1>
            <div className='one-column !gap-1'>
                {imageLink && failedImageId !== image_id ? <Image unoptimized priority src={imageLink} alt={title} width={843} height={600} onError={() => setFailedImageId(image_id)} /> : <p>Image unavailable</p>}
                <AddToFavoriteButton
                    artItem={art}
                    language={language}
                    className='self-end my-3'
                />
                <p className='self-start text-start !leading-[20px] regular-font !font-extralight'>
                    {credit_line}, {place_of_origin}
                </p>
                <p className='self-start regular-font !font-extralight -mt-1'>{date_display}</p>
                <p className='self-start regular-font !font-extralight -mt-2'>
                    {artwork_type_title}
                </p>
            </div>
            {description && <div className='text-start regular-font'>{parse(description)}</div>}
            <h3
                custom-attribute={artist_display}
                className='special-font !text-xl self-end text-start before:content-[attr(custom-attribute)]'>
                {artist_display}
            </h3>
            {exhibition_history && (
                <>
                    <h2 className='self-end text-2xl font-semibold'>
                        {phrases.exhibitionTitlePhrases[language]}
                    </h2>
                    <p className='text-end regular-font !text-sm'>{exhibition_history}</p>
                </>
            )}
        </div>
    );
}
