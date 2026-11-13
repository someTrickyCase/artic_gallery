"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import SearchFeed from "@/components/Feed/SearchFeed";
import Header from "@/components/Header/Header";
import styles from "@/app/Gallery.module.css";

export default function ArtListPage({ query }: { query: string }) {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    return (
        <section data-theme={theme === "dark" ? "dark" : "bright"} className={`${styles.screen} ${theme === "dark" ? "dark" : "brigth"}`}>
            <Header
                noSearch
                language={language}
                theme={theme}
                languageSwitcher={setLanguage}
                themeSwitcher={setTheme}
            />
            <SearchFeed language={language} query={query} />
        </section>
    );
}
