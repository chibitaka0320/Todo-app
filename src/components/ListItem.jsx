import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { useDispatch } from "react-redux";
import { removeList } from "../store/userSlice";

export const ListItem = ({ item, index }) => {
  const { listName } = item;

  const dispatch = useDispatch();

  const deleteList = () => {
    dispatch(removeList(index));
  };

  return (
    <View>
      <Text>{index}</Text>
      <Text>{listName}</Text>
      <Button title="削除" onPress={deleteList} />
    </View>
  );
};
