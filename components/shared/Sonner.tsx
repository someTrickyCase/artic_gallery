import { DICTIONARY } from "@/settings/dictionary";
import { LanguageSwitcherType } from "@/types/types";

const loadingPhrases = DICTIONARY["sonnerPhrases"];
const favoritePhrases = DICTIONARY["favoriteSonnerPhrases"];

export default function Sonner({
    language,
    favorite = false,
}: {
    language: LanguageSwitcherType;
    favorite?: boolean;
}) {
    return (
        <div className='z-20 w-screen h-screen backdrop-blur-3xl '>
            <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-100%] one-column'>
                <div className='h-24 w-24 bg-gray flex items-center justify-center animate-spin shadow-sm shadow-foreground'>
                    <div className='h-12 w-12 bg-background animate-spin-left shadow-sm shadow-background' />
                </div>
                <p className='mt-5 ml-3 font-extralight text-lg animate-pulse cursor-default uppercase'>
                    {favorite ? favoritePhrases[language] : loadingPhrases[language]}
                </p>
            </div>
        </div>
    );
}
