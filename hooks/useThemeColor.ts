// hooks/useThemeColor.ts
import { useTheme } from "@/contexts/ThemeContext";
import { Colors } from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const { theme } = useTheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  }

  if (Colors[theme]?.[colorName]) {
    return Colors[theme][colorName];
  }

  console.error(
    `Invalid colorName "${colorName}" or theme "${theme}". Ensure it matches the Colors object.`
  );
  return "#FF0000"; // Fallback color
}
