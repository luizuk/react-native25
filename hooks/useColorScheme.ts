import { useState, useEffect } from "react";
import { Appearance } from "react-native";

export function useColorScheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    Appearance.getColorScheme() ?? "light"
  );

  // Optional: Add a toggleTheme method if you're manually switching themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // React to system theme changes (if required)
  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme ?? "light");
    });
    return () => listener.remove();
  }, []);

  return { theme, toggleTheme };
}
