import React from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { CostomeTab } from "../components/CostomeTab";

// screen
import { InitScreen } from "./InitScreen";

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CostomeTab {...props} />}
      // screenOptions={{
      //   tabBarItemStyle: { width: 80 },
      //   tabBarIndicatorStyle: { backgroundColor: "#F2B705" },
      //   tabBarActiveTintColor: "#BF9075",
      // }}
    >
      <Tab.Screen
        name="Init"
        component={InitScreen}
        options={{ title: "hello000000000" }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
