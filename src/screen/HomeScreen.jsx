import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useDispatch, useSelector } from "react-redux";

import { CostomeTab } from "../components/CostomeTab";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ModalScreen } from "./ModalScreen";

// screen
import { TodoScreen } from "./TodoScreen";
import { blukRemoveTodo } from "../store/userSlice";
import { NoListScreen } from "./NoListScreen";

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = () => {
  const lists = useSelector((state) => state.user.items);
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const activeIndex = (index) => {
    setActiveTab(index);
  };

  const toggle = () => {
    setVisible(!visible);
  };

  const trash = () => {
    dispatch(blukRemoveTodo(activeTab));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator
        tabBar={(props) => {
          return <CostomeTab {...props} activeIndex={activeIndex} />;
        }}
      >
        {lists.length > 0 ? (
          lists.map((list, index) => (
            <Tab.Screen
              key={index}
              name={list.listName + index}
              component={TodoScreen}
              initialParams={{ itemIndex: index }}
              options={{ title: list.listName }}
            />
          ))
        ) : (
          <Tab.Screen name="nolist" component={NoListScreen} />
        )}
      </Tab.Navigator>
      {lists.length > 0 && (
        <View>
          <TouchableOpacity style={styles.trash} onPress={trash}>
            <FontAwesome name="trash-o" size={25} color="#F2B705" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.plus} onPress={toggle}>
            <AntDesign name="plus" size={25} color="white" />
          </TouchableOpacity>
          <Modal visible={visible} transparent>
            <ModalScreen toggle={toggle} index={activeTab} />
          </Modal>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plus: {
    height: 50,
    width: 50,
    backgroundColor: "#F2B705",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    position: "absolute",
    bottom: 60,
    right: 20,
  },
  trash: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    position: "absolute",
    bottom: 60,
    left: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
});
