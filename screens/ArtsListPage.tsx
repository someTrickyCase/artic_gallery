"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import Header from "@/components/Header/Header";
import Feed from "@/components/Feed/Feed";
import styles from "@/app/Gallery.module.css";

export default function ArtListPage() {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    return (
        <section
            data-theme={theme === "dark" ? "dark" : "bright"}
            className={`${styles.screen} ${styles.scroll} ${
                theme === "dark" ? "dark" : "brigth"
            }`}>
            <Header
                language={language}
                theme={theme}
                languageSwitcher={setLanguage}
                themeSwitcher={setTheme}
            />
            <Feed language={language} />
        </section>
    );
}
