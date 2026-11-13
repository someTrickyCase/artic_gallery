"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import Header from "@/components/Header/Header";
import ArtCard from "@/components/ArtCard/ArtCard";
import styles from "@/app/Gallery.module.css";

export default function ArtPage() {
    const { language, setLanguage } = useLanguage();
    const { theme, setTheme } = useTheme();

    return (
        <section data-theme={theme === "dark" ? "dark" : "bright"} className={`${styles.screen} ${theme === "dark" ? "dark" : "brigth"}`}>
            <Header
                language={language}
                theme={theme}
                languageSwitcher={setLanguage}
                themeSwitcher={setTheme}
                navigateBack
            />
            <ArtCard language={language} />
        </section>
    );
}
