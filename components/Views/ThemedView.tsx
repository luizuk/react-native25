import React from "react";
import { View, ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  // Ensure the colorName matches the Colors object
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "prebackground"
  );

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
