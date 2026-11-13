"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import { DICTIONARY } from "@/settings/dictionary";
import { welcomePhrasesType } from "@/types/types";

import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import ThemeSwitcher from "@/components/shared/ThemeSwitcher";
import LinkButton from "@/components/ui/LinkButton";
import styles from "@/app/Gallery.module.css";

const phrases: welcomePhrasesType = DICTIONARY["welcomeMessages"];

export default function WelcomePage() {
    const { language, setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();

    return (
        <section data-theme={theme === "dark" ? "dark" : "bright"} className={`${styles.screen} ${styles.centered} ${theme === "dark" ? "dark" : "brigth"}`}>
            <div className='max-w-[600px] px-5 py-3 one-column !gap-12'>
                <h1
                    custom-attribute={
                        phrases["greating"][language as keyof welcomePhrasesType["greating"]]
                    }
                    className={`special-font self-start before:content-[attr(custom-attribute)]
                    `}>
                    {phrases["greating"][language as keyof welcomePhrasesType["greating"]]}
                </h1>
                <p className='regular-font'>
                    {phrases["explanation"][language as keyof welcomePhrasesType["explanation"]]}
                </p>
                <LinkButton className='self-end' linkTo={"/arts"}>
                    <p>
                        {
                            phrases["ctaButtonText"][
                                language as keyof welcomePhrasesType["ctaButtonText"]
                            ]
                        }
                    </p>
                </LinkButton>
            </div>
            <div className='centered gap-3 absolute top-4'>
                <LanguageSwitcher switcher={setLanguage} language={language} />
                <ThemeSwitcher switcher={setTheme} theme={theme} />
            </div>
            <a
                className='absolute bottom-4 regular-font !text-sm !font-extralight'
                href='https://github.com/someTrickyCase'>
                @someTrickyCase
            </a>
        </section>
    );
}
