import React from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { removeTodo, toggleClick } from "../store/userSlice";

export const TodoList = ({ item }) => {
  const { text } = item;
  const { id } = item;
  const { click } = item;
  const dispatch = useDispatch();

  const iconName = click ? "check-circle" : "circle";

  const remove = () => {
    dispatch(removeTodo(id));
  };

  const check = () => {
    dispatch(toggleClick(id));
  };

  return (
    <View style={styles.container}>
      <Feather style={styles.icon} name={iconName} size={25} onPress={check} />
      <View style={styles.text}>
        <Text>{text}</Text>
        <TouchableOpacity style={styles.button} onPress={remove}>
          <Text style={{ color: "white", fontWeight: "bold" }}>削除</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  icon: {
    paddingRight: 10,
    color: "#F2B705",
  },
  text: {
    padding: 10,
    width: "90%",
    borderBottomWidth: 0.5,
    borderColor: "#8C8C88",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#F2B705",
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
});
