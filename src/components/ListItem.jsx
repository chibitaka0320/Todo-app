import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";

import { useDispatch } from "react-redux";
import { removeList } from "../store/userSlice";

import Feather from "react-native-vector-icons/Feather";

export const ListItem = ({ item, index, closeDrawer, tap }) => {
  const { listName } = item;
  const [visible, setVisible] = useState(false);
  const translateXValue = useState(new Animated.Value(0))[0];

  const dispatch = useDispatch();

  const deleteList = () => {
    dispatch(removeList(index));
    setVisible(!visible);
  };

  useEffect(() => {
    Animated.timing(translateXValue, {
      toValue: visible ? -60 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [visible, translateXValue]);

  useEffect(() => {
    if (visible) {
      setVisible(!visible);
    }
  }, [tap]);

  const onPress = () => {
    if (visible) {
      setVisible(!visible);
    } else {
      closeDrawer(listName + index);
    }
  };

  const iconPress = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity activeOpacity={1.0} onPress={onPress}>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateX: translateXValue }] },
        ]}
      >
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={iconPress} style={styles.icon}>
            <Feather name="x-circle" size={24} color={"#F2B705"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16 }}>{listName}</Text>
        </View>
        <TouchableOpacity onPress={deleteList} style={styles.button}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            削除
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 45,
  },
  leftContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#F24141",
    height: "100%",
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
