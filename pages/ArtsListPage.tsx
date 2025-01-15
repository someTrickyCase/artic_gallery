"use client";

import useLanguage from "@/hooks/useLanguage";
import useTheme from "@/hooks/useTheme";

import Header from "@/components/Header/Header";
import Feed from "@/components/Feed/Feed";

export default function ArtListPage() {
    const { theme, setTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    return (
        <section
            className={`fullscreen one-column px-5 overflow-y-scroll no-scrollbar ${
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
