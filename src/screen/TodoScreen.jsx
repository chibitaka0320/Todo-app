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
  const [visible, setVisible] = useState(false);
  const { index } = props.route.params;
  const todos = useSelector((state) => state.user.items[index].todos);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoList item={item} index={index} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatlist}
          scrollEnabled={false}
        />
      </ScrollView>
      <TouchableOpacity style={styles.plus} onPress={toggle}>
        <AntDesign name="plus" size={25} color="white" />
      </TouchableOpacity>
      <Modal visible={visible} transparent>
        <ModalScreen toggle={toggle} index={index} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flatlist: {
    padding: 20,
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
});
