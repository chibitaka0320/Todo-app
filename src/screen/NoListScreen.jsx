import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const NoListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>リストが存在しません。</Text>
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
