export type welcomePhrasesType = {
    greating: {
        ru: string;
        eng: string;
    };
    explanation: {
        ru: string;
        eng: string;
    };
    ctaButtonText: {
        ru: string;
        eng: string;
    };
};

export type ArtType = {
    id: number;
    image_id: string | null;
    artist_display: string;
    title: string;
    credit_line: string;
    description: string;
    date_display: string;
    artwork_type_title: string;
    exhibition_history: string;
    place_of_origin: string;
};

export type PreferencesType = {
    language: LanguageSwitcherType;
    theme: ThemeSwitcherType;
};

export type LanguageSwitcherType = "ru" | "eng";
export type ThemeSwitcherType = "dark" | "brigth";
