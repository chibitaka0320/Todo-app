import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
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
