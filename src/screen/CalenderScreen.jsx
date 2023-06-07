import React from "react";
import { SafeAreaView } from "react-native";
import { Calendar } from "react-native-calendars";

export const CalenderScreen = () => {
  return (
    <SafeAreaView>
      <Calendar
        showSixWeeks
        style={{
          height: "90%",
        }}
        theme={{
          "stylesheet.calendar.main": {
            monthView: {
              flex: 1,
              height: "100%",
              justifyContent: "space-around",
            },
            week: {
              flex: 1,
              marginVertical: 0,
              flexDirection: "row",
              justifyContent: "space-around",
            },
            dayContainer: {
              borderColor: "#f5f5f5",
              borderWidth: 1,
              flex: 1,
            },
          },
        }}
      />
    </SafeAreaView>
  );
};
