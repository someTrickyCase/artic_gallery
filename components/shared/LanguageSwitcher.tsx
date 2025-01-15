import { LanguageSwitcherType } from "@/types/types";

export default function LanguageSwitcher({
    language,
    switcher,
}: {
    language?: LanguageSwitcherType;
    switcher: (language: LanguageSwitcherType) => void;
}) {
    function setLanguage() {
        switch (language) {
            case "eng":
                switcher("ru");
                return;
            case "ru":
                switcher("eng");
                return;
        }
    }

    return (
        <div
            className='px-3 top-6 right-16 centered cursor-pointer border-r-[1px] box-border border-background hover:border-foreground duration-300'
            onClick={setLanguage}>
            <p className='translate-y-[-2px]'>{language === "eng" ? "ru" : "eng"}</p>
        </div>
    );
}
