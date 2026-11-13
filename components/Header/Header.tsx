import { LanguageSwitcherType, ThemeSwitcherType } from "@/types/types";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import LanguageSwitcher from "../shared/LanguageSwitcher";
import ThemeSwitcher from "../shared/ThemeSwitcher";
import { arrowBack, star } from "../ui/icons";
import SearchBar from "../ui/SearchBar";
import Link from "next/link";

export default function Header({
    language,
    theme,
    languageSwitcher,
    themeSwitcher,
    navigateBack = false,
    noSearch = false,
}: {
    language: LanguageSwitcherType;
    theme: ThemeSwitcherType;
    languageSwitcher: (language: LanguageSwitcherType) => void;
    themeSwitcher: (theme: ThemeSwitcherType) => void;
    navigateBack?: boolean;
    noSearch?: boolean;
}) {
    const [isActive, setIsActive] = useState(true);
    const navigator = useRouter();

    useEffect(() => {
        const onWheel = (event: WheelEvent) => setIsActive(event.deltaY <= 0);
        window.addEventListener("wheel", onWheel, { passive: true });
        return () => window.removeEventListener("wheel", onWheel);
    }, []);

    return (
        <div
            className={`fixed px-4 md:px-10 flex justify-between w-full h-16 md:h-20 bg-transparent backdrop-blur-md z-20 -top-16 transition-all duration-500 ease-in-out ${
                !isActive ? "-translate-y-16" : "translate-y-16"
            }`}>
            <div className='centered gap-2'>
                {navigateBack ? (
                    <div
                        onClick={() => {
                            navigator.back();
                        }}
                        className='centered border-[1px] box-content border-foreground rounded-sm h-8 w-8 bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-500 cursor-pointer'>
                        {arrowBack}
                    </div>
                ) : (
                    <Link
                        href='/arts/favorites'
                        className='centered border-[1px] box-content border-foreground rounded-sm h-8 w-8 bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-500'>
                        {star}
                    </Link>
                )}
                {!noSearch && <SearchBar language={language} />}
                {noSearch && (
                    <div
                        onClick={() => {
                            navigator.back();
                        }}
                        className='centered border-[1px] box-content border-foreground rounded-sm h-8 w-8 bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-500 cursor-pointer'>
                        {arrowBack}
                    </div>
                )}
            </div>
            <div className='centered gap-3'>
                <LanguageSwitcher language={language} switcher={languageSwitcher} />
                <ThemeSwitcher theme={theme} switcher={themeSwitcher} />
            </div>
        </div>
    );
}
