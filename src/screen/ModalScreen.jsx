import React, { useEffect, useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/userSlice";

import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ModalScreen = ({ toggle }) => {
  const [addText, setAddText] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.user.items);

  const add = () => {
    if (addText === "") {
      toggle();
    } else {
      dispatch(addTodo({ id: todos.length, text: addText, click: false }));
      setAddText("");
      toggle();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <View style={styles.popupItem}>
          <View style={styles.popupTitle}>
            <Feather name="file-text" size={20} />
            <Text style={styles.popupText}>やること</Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setAddText(text)}
          />
        </View>
        <View style={styles.popupItem}>
          <View style={styles.popupTitle}>
            <Ionicons name="ios-color-palette-outline" size={20} />
            <Text style={styles.popupText}>カラー</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={add}>
          <Text style={{ color: "white", fontWeight: "bold" }}>閉じる</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
  },
  popup: {
    width: 380,
    height: 300,
    backgroundColor: "#F2ECE4",
    borderRadius: 10,
    padding: 15,
    position: "absolute",
    top: 200,
  },
  button: {
    backgroundColor: "#F2B705",
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    color: "white",
    position: "absolute",
    right: 20,
    bottom: 20,
  },
  popupText: {
    fontSize: 18,
    paddingLeft: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#8C8C88",
    padding: 10,
    fontSize: 18,
  },
  popupItem: {
    marginBottom: 20,
  },
  popupTitle: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
});
