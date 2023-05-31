import { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

export const SampleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>サンプル画面</Text>
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
