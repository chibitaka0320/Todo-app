import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";

export const TabEditScreen = () => {
  const lists = useSelector((state) => state.user.items);

  return (
    <View style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => <ListItem item={item} index={index} />}
        keyExtractor={(item, index) => index.toString()}
        // style={styles.flatlist}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
