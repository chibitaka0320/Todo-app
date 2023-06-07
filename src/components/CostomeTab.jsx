import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export const CostomeTab = ({ state, descriptors, navigation, activeIndex }) => {
  const navigate = useNavigation();

  useEffect(() => {
    activeIndex(state.index);
  }, [state.index]);
  return (
    <View style={styles.tabBarContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.title || route.name;

          // アクティブなタブかどうかを判定
          const isActive = state.index === index;

          // タイトルの文字数に応じて表示を調整
          const displayLabel =
            label.length >= 10 ? `${label.substring(0, 10)}...` : label;

          // アクティブなタブのスタイルを変更
          const tabStyle = {
            alignItems: "center",
            justifyContent: "center",
            borderBottomWidth: 2,
            borderBottomColor: isActive ? "#F2B705" : "white",
          };
          if (displayLabel !== "nolist") {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={tabStyle}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    color: isActive ? "#BF9075" : "black",
                    fontSize: 14,
                  }}
                >
                  {displayLabel}
                </Text>
              </TouchableOpacity>
            );
          }
        })}

        <TouchableOpacity
          onPress={() => {
            // プラスボタンが押された時の処理
            navigate.navigate("AddList");
          }}
          style={{
            //   flex: 1,
            alignItems: "center",
            justifyContent: "center",
            width: 50,
          }}
        >
          <Text>＋</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 16,
  },
});
