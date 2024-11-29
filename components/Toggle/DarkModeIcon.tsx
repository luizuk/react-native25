import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "../Views/ThemedView";

export default function DarkModeIcon() {
  const { theme, toggleTheme } = useTheme();
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );

  return (
    <Pressable onPress={toggleTheme}>
      <ThemedView
        style={[styles.darkModeIconToggleContainer, { borderColor: color }]}
      >
        <Feather
          name={theme === "dark" ? "moon" : "sun"}
          size={18}
          color={color}
        />
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  darkModeIconToggleContainer: {
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
