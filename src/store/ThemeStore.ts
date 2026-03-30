import { create } from "zustand";
import { persist } from "zustand/middleware";
import { HeroPaletteKey, buildTheme } from "@/App/theme/theme";

const defaultIsDarkMode = true;
const defaultHeroPalette: HeroPaletteKey = "plum";

interface ThemeStore {
    isDarkMode : boolean;
    heroPalette : HeroPaletteKey;
    theme : ReturnType<typeof buildTheme>;
    toggleTheme : () => void;
    setHeroPalette : (palette: HeroPaletteKey) => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set,get) => ({
            isDarkMode: defaultIsDarkMode,
            heroPalette: defaultHeroPalette,
            theme: buildTheme(defaultIsDarkMode, defaultHeroPalette),
            toggleTheme : () => {
                const newIsDarkMode = !get().isDarkMode;
                set({
                    isDarkMode: newIsDarkMode,
                    theme : buildTheme(newIsDarkMode, get().heroPalette)
                });
            },
            setHeroPalette: (palette) => {
                set({
                    heroPalette: palette,
                    theme: buildTheme(get().isDarkMode, palette),
                });
            },
        }),
        {
            name : 'theme-storage',
            partialize : (state) => ({
                isDarkMode : state.isDarkMode,
                heroPalette: state.heroPalette,
            }),
            onRehydrateStorage: () => (state) => {
                if (!state) return;
                state.theme = buildTheme(state.isDarkMode, state.heroPalette);
            },
        }
        
    )
)
