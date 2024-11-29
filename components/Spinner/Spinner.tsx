import { useTheme } from "@/contexts/ThemeContext";
import { ActivityIndicator, StyleSheet } from "react-native";
import { ThemedView } from "../Views/ThemedView";
import { ThemedText } from "../Texts/ThemedText";
import { Colors } from "@/constants/Colors";

interface SpinnerProps {
  title: string;
}

export default function Spinner({ title }: SpinnerProps) {
  const { theme } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator
        size="large"
        color={theme === "light" ? Colors.light.text : Colors.dark.text}
      />
      <ThemedText type="subtitle">{title}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
