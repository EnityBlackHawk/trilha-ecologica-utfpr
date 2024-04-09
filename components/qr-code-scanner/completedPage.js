import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ScanCompletedPage = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.data}</Text>
    </View>
  );
};

export default ScanCompletedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
