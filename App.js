import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store, persistor } from "./src/store/todo";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";


// Screen
import { HomeScreen } from "./src/screen/HomeScreen";
import { SettingScreen } from "./src/screen/SettingScreen";
import { TabEditScreen } from "./src/screen/TabEditScreen";
import { HomeHeaderRight, HomeHeaderLeft } from "./src/components/HomeHeader";
import { AddListScreen } from './src/screen/AddListScreen';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { CalenderScreen } from './src/screen/CalenderScreen';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <TabEditScreen {...props} />}
            screenOptions={{ drawerStyle: { backgroundColor: "#F2ECE4", width: 350 } }}
          >
            <Drawer.Screen name="StackScreen" options={{ headerShown: false }}>
              {() => (
                <Stack.Navigator
                  screenOptions={{
                    headerStyle: { backgroundColor: "#F2B705" },
                    headerTitleStyle: { color: "white" },
                  }}
                >
                  <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                      headerRight: () => (
                        <HomeHeaderRight />
                      ),
                      headerLeft: () => (
                        <HomeHeaderLeft />
                      ),
                    }}
                  />
                  <Stack.Screen name="Setting" component={SettingScreen} />
                  <Stack.Screen name="AddList" component={AddListScreen}
                    options={{
                      presentation: "modal",
                      title: "リストの追加"
                    }} />
                  <Stack.Screen name="Calender" component={CalenderScreen} />
                </Stack.Navigator>
              )}
            </Drawer.Screen>
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider >
  );
}
