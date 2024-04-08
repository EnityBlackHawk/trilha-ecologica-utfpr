import React from "react";
import NavigationView from "../navigation";
import HomeView from "../../pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="menu"
          component={NavigationView}
          options={{ headerTitle: "Menu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
