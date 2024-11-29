import { ThemedText } from "@/components/Texts/ThemedText";
import DarkModeIcon from "@/components/Toggle/DarkModeIcon";
import { ThemedView } from "@/components/Views/ThemedView";
import { Colors } from "@/constants/Colors";
import { featureList } from "@/constants/features";
import { useSession } from "@/contexts/AuthContext";
import React from "react";
import { Linking, Pressable, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function HomeScreen() {
  const { signIn } = useSession();
  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedText type="title">
        Welcome to React Native 25 starter app example.
      </ThemedText>

      <ThemedView
        darkColor={Colors.dark.background}
        lightColor={Colors.light.background}
        style={styles.focusPointsContainer}
      >
        <View style={styles.focusPointsHeader}>
          <ThemedText type="subtitle" style={styles.focusPointTitle}>
            Focus points
          </ThemedText>

          <DarkModeIcon />
        </View>

        <FlatList
          data={featureList}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ThemedText style={styles.focusPointItemText}>{item}</ThemedText>
          )}
        />
      </ThemedView>

      <Pressable
        onPress={() => {
          Linking.openURL("https://github.com/luizuk/react-native25");
        }}
      >
        <ThemedText
          lightColor={Colors.light.tint}
          darkColor={Colors.dark.lightBlueText}
          style={styles.linkText}
        >
          Link of the repo
        </ThemedText>
      </Pressable>

      <Pressable onPress={() => signIn()}>
        <ThemedView
          darkColor={Colors.dark.background}
          lightColor={Colors.light.background}
          style={styles.loginButton}
        >
          <ThemedText style={styles.loginButtonText}>Login Example</ThemedText>
        </ThemedView>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
  focusPointsContainer: {
    width: "100%",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    minWidth: 300,
    maxWidth: 600,
  },
  focusPointsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  focusPointTitle: {
    textAlign: "center",
    marginBottom: 10,
  },
  focusPointItemText: {
    marginVertical: 5,
  },
  linkText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
