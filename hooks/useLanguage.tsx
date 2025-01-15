import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

import { LanguageSwitcherType } from "@/types/types";

export default function useLanguage() {
    const { preferLanguage, setPreferLanguage } = useStore();
    const [language, _setLanguage] = useState<LanguageSwitcherType>(preferLanguage);

    useEffect(() => {
        _setLanguage(preferLanguage);
    }, [preferLanguage]);

    function setLanguage(language: LanguageSwitcherType) {
        _setLanguage(language);
        setPreferLanguage(language);
    }

    return { language, setLanguage };
}
