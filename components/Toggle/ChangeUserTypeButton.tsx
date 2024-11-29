import { Colors } from "@/constants/Colors";
import { useTheme } from "@/contexts/ThemeContext";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";
import { ThemedView } from "../Views/ThemedView";

interface ChangeUserTypeButtonProps {
  onPress: () => void;
}

export default function ChangeUserTypeButton({
  onPress,
}: ChangeUserTypeButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const color = useThemeColor(
    { light: Colors.light.text, dark: Colors.dark.text },
    "text"
  );

  const greenColor = useThemeColor(
    { light: Colors.light.green, dark: Colors.dark.green },
    "green"
  );

  return (
    <Pressable onPress={onPress}>
      <ThemedView
        // darkColor={Colors.dark.background}
        // lightColor={Colors.light.background}
        style={[
          styles.changeUserTypeIconContainer,
          { borderColor: color, backgroundColor: greenColor },
        ]}
      >
        <Feather name="users" size={18} color={color} />
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  changeUserTypeIconContainer: {
    width: 35,
    height: 35,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
});
