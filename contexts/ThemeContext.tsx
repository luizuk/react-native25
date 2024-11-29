// contexts/ThemeContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Appearance } from "react-native";
import { useStorageState } from "@/hooks/useStorageState";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useStorageState("user-theme"); // Persist theme in storage
  const [theme, setTheme] = useState<Theme>(
    (themeState[1] as Theme) || Appearance.getColorScheme() || "light"
  );

  // Load theme from cache on mount
  useEffect(() => {
    const cachedTheme = themeState[1];
    if (cachedTheme) {
      setTheme(cachedTheme as Theme);
    }
  }, [themeState]);

  // Toggle theme and save it to cache
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemeState(newTheme); // Save to storage
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
