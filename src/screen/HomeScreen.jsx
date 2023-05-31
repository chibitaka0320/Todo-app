import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

import { CostomeTab } from "../components/CostomeTab";

// screen
import { TodoScreen } from "./TodoScreen";
import { SampleScreen } from "./SampleScreen";

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = ({ navigation }) => {
  const lists = useSelector((state) => state.user.items);

  return (
    <Tab.Navigator tabBar={(props) => <CostomeTab {...props} />}>
      {lists.map((list, index) => (
        <Tab.Screen
          key={index}
          name={list.listName + index}
          component={TodoScreen}
          initialParams={{ index: index }}
          options={{ title: list.listName }}
        />
      ))}
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
