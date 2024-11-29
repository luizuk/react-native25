import { ThemedText } from "@/components/Texts/ThemedText";
import { ThemedView } from "@/components/Views/ThemedView";
import { Colors } from "@/constants/Colors";
import { useSession } from "@/contexts/AuthContext";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

export default function LoggedScreen() {
  const { signOut } = useSession();

  return (
    <ThemedView style={styles.contentContainer}>
      <ThemedText type="title">Logged page.</ThemedText>

      <Pressable onPress={() => signOut()}>
        <ThemedView
          darkColor={Colors.dark.background}
          lightColor={Colors.light.background}
          style={styles.logoutButton}
        >
          <ThemedText style={styles.logoutButtonText}>Logout</ThemedText>
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
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
