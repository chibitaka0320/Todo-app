import React, { useEffect, useReducer, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  FlatList,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ModalScreen } from "./ModalScreen";

import { TodoList } from "../components/TodoList";
import { useSelector } from "react-redux";

export const TodoScreen = (props) => {
  const { itemIndex } = props.route.params;
  const todos = useSelector((state) => state.user.items[itemIndex].todos);

  if (todos.length > 0) {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.flatlist}>
          {todos.map((item, index) => (
            <View key={index}>
              <TodoList item={item} index={itemIndex} />
              {index !== todos.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.none}>
        <Text style={{ fontSize: 16 }}>Todoはありません</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatlist: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
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
  none: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    height: 0.5,
    backgroundColor: "gray",
  },
});
