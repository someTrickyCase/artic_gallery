import { ArtType, LanguageSwitcherType } from "@/types/types";

import { DICTIONARY } from "@/settings/dictionary";
import BentoGrid from "../ui/BentoGrid";
import Sonner from "../shared/Sonner";
import Card from "./Card/Card";

const phrases = DICTIONARY.favoriteFeedMessages;

export default function Feed({
    language,
    data,
}: {
    language: LanguageSwitcherType;
    data: ArtType[];
}) {
    return (
        <div className='pt-20 pb-5 h-screen one-column !gap-4 w-full overflow-y-scroll no-scrollbar'>
            <h1
                custom-attribute={phrases.title[language]}
                className='special-font self-start text-start
                    before:content-[attr(custom-attribute)]'>
                {phrases.title[language]}
            </h1>
            {data.length === 0 && <Sonner language={language} favorite />}
            <BentoGrid>
                {data &&
                    data.map((cardData: ArtType, index: number) => (
                        <Card
                            index={index}
                            key={cardData["id"]}
                            artItem={cardData}
                            language={language}
                        />
                    ))}
            </BentoGrid>
        </div>
    );
}
