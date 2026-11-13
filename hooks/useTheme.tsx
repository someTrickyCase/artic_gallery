import { useStore } from "@/store/useStore";

import { ThemeSwitcherType } from "@/types/types";

export default function useTheme() {
    const { preferTheme, setPreferTheme } = useStore();
    const theme = preferTheme;

    function setTheme(theme: ThemeSwitcherType) {
        setPreferTheme(theme);
    }

    return { theme, setTheme };
}
