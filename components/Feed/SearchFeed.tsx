import { ArtType, LanguageSwitcherType } from "@/types/types";

import { useSearchedArts } from "@/hooks/useSearchedArts";

import { DICTIONARY } from "@/settings/dictionary";
import LoadMoreButton from "../ui/LoadMoreButton";
import BentoGrid from "../ui/BentoGrid";
import Sonner from "../shared/Sonner";
import Card from "./Card/Card";

const phrases = DICTIONARY.searchFeedMessages;

export default function Feed({
    language,
    query,
}: {
    language: LanguageSwitcherType;
    query: string;
}) {
    const { data, isLoading, size, setSize } = useSearchedArts(query);

    return (
        <div className='pt-20 pb-5 h-screen one-column !gap-4 w-full overflow-y-scroll no-scrollbar'>
            <h1
                custom-attribute={phrases.title[language] + " " + `"${query}"`}
                className='special-font self-start text-start
                    before:content-[attr(custom-attribute)]'>
                {phrases.title[language] + " " + `"${query}"`}
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
