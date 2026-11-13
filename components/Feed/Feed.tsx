import { ArtType, LanguageSwitcherType } from "@/types/types";

import { useArts } from "@/hooks/useArts";

import { DICTIONARY } from "@/settings/dictionary";
import LoadMoreButton from "../ui/LoadMoreButton";
import BentoGrid from "../ui/BentoGrid";
import Sonner from "../shared/Sonner";
import Card from "./Card/Card";

const phrases = DICTIONARY.feedMessages;

export default function Feed({ language }: { language: LanguageSwitcherType }) {
    const { data, isLoading, size, setSize } = useArts();

    return (
        <div className='pt-20 mb-5 !gap-4 w-full one-column'>
            <h1
                custom-attribute={phrases.title[language]}
                className='special-font self-start text-start w-fit
                    before:content-[attr(custom-attribute)]'>
                {phrases.title[language]}
            </h1>
            {isLoading && <Sonner language={language} />}
            <BentoGrid className='max-w-4xl mx-auto mb-4'>
                {data &&
                    data.map((dataItem) =>
                        dataItem.map((cardData: ArtType, index: number) => (
                            <Card
                                index={index}
                                key={cardData["id"]}
                                artItem={cardData}
                                language={language}
                            />
                        ))
                    )}
            </BentoGrid>
            {data && (
                <LoadMoreButton
                    language={language}
                    sizeToLoad={size}
                    loader={setSize}
                />
            )}
        </div>
    );
}
