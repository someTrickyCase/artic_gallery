import { moonIcon, sunIcon } from "../ui/icons";
import { ThemeSwitcherType } from "@/types/types";

export default function ThemeSwitcher({
    theme,
    switcher,
}: {
    theme?: ThemeSwitcherType;
    switcher: (theme: ThemeSwitcherType) => void;
}) {
    function setTheme() {
        switch (theme) {
            case "brigth":
                switcher("dark");
                return;
            case "dark":
                switcher("brigth");
                return;
        }
    }

    return (
        <div
            className='centered top-6 right-8 centered cursor-pointer duration-300'
            onClick={setTheme}>
            <div>{theme === "dark" ? sunIcon : moonIcon}</div>
        </div>
    );
}
