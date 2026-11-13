import { create } from "zustand";
import { ArtType, LanguageSwitcherType, ThemeSwitcherType } from "@/types/types";
import { createJSONStorage, persist } from "zustand/middleware";

type State = {
    favorites: ArtType[];
    preferTheme: ThemeSwitcherType;
    preferLanguage: LanguageSwitcherType;
    selectedArt: ArtType | undefined;
};

type Actions = {
    addFavorites: (favoriteToAdd: ArtType) => void;
    removeFromFavorites: (favoriteToRemove: ArtType) => void;
    setPreferTheme: (preferTheme: ThemeSwitcherType) => void;
    setPreferLanguage: (preferLanguage: LanguageSwitcherType) => void;
    setSelectedArt: (selectedArt: ArtType) => void;
};

export const useStore = create<State & Actions>()(
    persist(
        (set, get) => ({
            // FAVORITES
            favorites: [],
            addFavorites: (favoriteArt: ArtType) => {
                const favorites = get().favorites.some((item) => item.id === favoriteArt.id) ? get().favorites : [...get().favorites, favoriteArt];
                set({ favorites });
            },
            removeFromFavorites: (favoriteToRemove: ArtType) => {
                const favorites = get().favorites.filter((item) => item.id !== favoriteToRemove.id);
                set({ favorites });
            },
            // LANGUAGE AND COLORTHEME
            preferTheme: "dark",
            preferLanguage: "eng",
            setPreferTheme: (theme) => {
                set({ preferTheme: theme });
            },
            setPreferLanguage: (language) => {
                set({ preferLanguage: language });
            },
            // SELECTED ART
            selectedArt: undefined,
            setSelectedArt: (selectedArt) => {
                set({ selectedArt });
            },
        }),
        {
            name: "store",
            storage: createJSONStorage(() => sessionStorage),
            version: 1,
            migrate: (persisted) => {
                const state = persisted as State & Actions;
                return { ...state, preferTheme: (state.preferTheme as string) === "brigth" ? "light" : state.preferTheme };
            },
        }
    )
);
