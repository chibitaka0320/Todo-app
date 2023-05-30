import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store, persistor } from "./src/store/todo";
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";


// Screen
import { HomeScreen } from "./src/screen/HomeScreen";
import { SettingScreen } from "./src/screen/SettingScreen";
import { HomeHeaderRight } from "./src/components/HomeHeader";
import { AddListScreen } from './src/screen/AddListScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <NavigationContainer>
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
              }}
            />
            <Stack.Screen name="Setting" component={SettingScreen} />
            <Stack.Screen name="AddList" component={AddListScreen}
              options={{
                presentation: "modal",
                title: "リストの追加"
              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
