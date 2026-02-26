import { create } from "zustand";
import { persist } from "zustand/middleware";
import { lightTheme, darkTheme } from "@/App/theme/theme";


interface ThemeStore {
    isDarkMode : boolean;
    theme : typeof lightTheme;
    toggleTheme : () => void;
}


export const useThemeStore = create<ThemeStore>()(
    persist(
        (set,get) => ({
            isDarkMode: true,
            theme: darkTheme,
            toggleTheme : () => {
                const newIsDarkMode = !get().isDarkMode;
                set({
                    isDarkMode: newIsDarkMode,
                    theme : newIsDarkMode ? darkTheme : lightTheme
                });
            },

        }),
        {
            name : 'theme-storage',
            partialize : (state) => ({isDarkMode : state.isDarkMode}),
        }
        
    )
)