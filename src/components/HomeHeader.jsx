import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export const HomeHeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {}} style={styles.icon}>
        <AntDesign name="search1" size={25} style={{ color: "white" }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Setting")}
        style={styles.icon}
      >
        <AntDesign name="setting" size={25} style={{ color: "white" }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    paddingLeft: 30,
    paddingRight: 10,
  },
});
