import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { useSelector } from "react-redux";
import { ListItem } from "../components/ListItem";
import { ScrollView } from "react-native-gesture-handler";
import { useDrawerStatus } from "@react-navigation/drawer";
import AntDesign from "react-native-vector-icons/AntDesign";

export const TabEditScreen = (props) => {
  const lists = useSelector((state) => state.user.items);
  const [visible, setVisible] = useState(false);
  const drawerStatus = useDrawerStatus();

  useEffect(() => {
    setVisible(!visible);
  }, [drawerStatus]);

  const closeDrawer = (componentName) => {
    props.navigation.closeDrawer();
    props.navigation.navigate({ name: componentName });
  };

  const tapScreen = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ height: 40, alignItems: "center", justifyContent: "center" }}
      >
        <Text>リスト一覧</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <TouchableOpacity
          onPress={tapScreen}
          style={styles.touchable}
          activeOpacity={1.0}
        >
          <View style={styles.flatlist}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Calender");
              }}
              style={styles.topList}
            >
              <AntDesign name="calendar" size={24} style={styles.icon} />
              <Text style={{ fontSize: 16 }}>カレンダー</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                marginBottom: 5,
                marginTop: 25,
                marginLeft: 10,
                fontSize: 14,
              }}
            >
              ○ 作成したリスト
            </Text>
            <View style={styles.flatlist}>
              {lists.map((item, index) => (
                <View key={index}>
                  <ListItem
                    item={item}
                    index={index}
                    closeDrawer={closeDrawer}
                    tap={visible}
                  />
                  {index !== lists.length - 1 && (
                    <View style={styles.separator} />
                  )}
                </View>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
    margin: 20,
  },
  topList: {
    flexDirection: "row",
    alignItems: "center",
    height: 45,
  },
  icon: {
    paddingHorizontal: 20,
  },
  touchable: {
    flex: 1,
  },
  flatlist: {
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
  },
  separator: {
    height: 0.5,
    backgroundColor: "gray",
  },
});
