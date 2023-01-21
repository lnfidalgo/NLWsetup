import { View, ActivityIndicator, StyleSheet } from "react-native";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#7C3AED" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#09090A",
  },
});