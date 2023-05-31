import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { addList } from "../store/userSlice";

export const AddListScreen = () => {
  const [listName, setListName] = useState("");
  const [listTodo, setListTodo] = useState();

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const onPress = () => {
    if (listTodo !== undefined) {
      dispatch(addList({ listName: listName, todos: [listTodo] }));
    } else {
      dispatch(addList({ listName: listName, todos: [] }));
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          onPress={() => navigation.goBack()}
          title="キャンセル"
          color={"white"}
        />
      ),
      headerRight: () => (
        <Button
          onPress={() => {
            onPress();
            navigation.goBack();
          }}
          title="追加"
          color={"white"}
        />
      ),
    });
  }, [navigation, onPress]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setListName(text)}
        value={listName}
        placeholder="リスト名"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2ECE4",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  textInput: {
    height: 45,
    width: "90%",
    backgroundColor: "white",
    fontSize: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});
