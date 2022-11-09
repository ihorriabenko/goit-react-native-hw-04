import { StyleSheet, View, Text } from "react-native";

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text>Map</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
