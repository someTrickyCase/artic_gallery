import { useStore } from "@/store/useStore";
import { useEffect, useState } from "react";

import { ThemeSwitcherType } from "@/types/types";

export default function useTheme() {
    const { preferTheme, setPreferTheme } = useStore();
    const [theme, _setTheme] = useState<ThemeSwitcherType>(preferTheme);

    useEffect(() => {
        _setTheme(preferTheme);
    }, [preferTheme]);

    function setTheme(theme: ThemeSwitcherType) {
        setPreferTheme(theme);
        _setTheme(theme);
    }

    return { theme, setTheme };
}
