"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";
import { useStore } from "@/store/useStore";

import FavoritesFeed from "@/components/Feed/FavoritesFeed";
import Header from "@/components/Header/Header";
import styles from "@/app/Gallery.module.css";

export default function FavoritesArtsPage() {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();
    const { favorites } = useStore();
    return (
        <section data-theme={theme === "dark" ? "dark" : "bright"} className={`${styles.screen} ${theme === "dark" ? "dark" : "brigth"}`}>
            <Header
                navigateBack
                language={language}
                theme={theme}
                languageSwitcher={setLanguage}
                themeSwitcher={setTheme}
            />
            <FavoritesFeed language={language} data={favorites} />
        </section>
    );
}
