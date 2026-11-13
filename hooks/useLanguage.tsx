import { useStore } from "@/store/useStore";

import { LanguageSwitcherType } from "@/types/types";

export default function useLanguage() {
    const { preferLanguage, setPreferLanguage } = useStore();
    const language = preferLanguage;

    function setLanguage(language: LanguageSwitcherType) {
        setPreferLanguage(language);
    }

    return { language, setLanguage };
}
