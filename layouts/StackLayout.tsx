import { ApplicationProvider } from "@/contexts/ApplicationContext";
import { useSession } from "@/contexts/AuthContext";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { clientApollo } from "@/data/apollo";
import { ApolloProvider } from "@apollo/client";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import { useFonts } from "expo-font";
import { Redirect, Slot, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function StackLayout() {
  return (
    <ThemeProvider>
      <ApolloProvider client={clientApollo}>
        <ApplicationProvider>
          <AuthenticatedAppContent />
        </ApplicationProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

function AuthenticatedAppContent() {
  const { theme } = useTheme();
  const { token } = useSession();

  if (!token) {
    return <Redirect href="/home" />;
  }

  const [loaded] = useFonts({
    openSansReg: OpenSans_400Regular,
    openSansBold: OpenSans_700Bold,
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Slot />
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
