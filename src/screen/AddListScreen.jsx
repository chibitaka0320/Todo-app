import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { addList } from "../store/userSlice";

export const AddListScreen = (props) => {
  const [listName, setListName] = useState("");
  const [listTodo, setListTodo] = useState();

  const navigation = useNavigation();

  const listsIndex = useSelector((state) => state.user.items.length);
  const dispatch = useDispatch();

  const onPress = async () => {
    if (listTodo !== undefined) {
      dispatch(addList({ listName: listName, todos: [listTodo] }));
    } else {
      dispatch(addList({ listName: listName, todos: [] }));
    }

    await new Promise((resolve) => setTimeout(resolve, 1));

    navigation.navigate(listName + listsIndex);
  };

  const rightTitle = listName === "" ? "閉じる" : "追加";

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
            if (listName !== "") {
              onPress();
            }
            navigation.goBack();
          }}
          title={rightTitle}
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
