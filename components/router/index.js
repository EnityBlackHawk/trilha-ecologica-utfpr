import { View, Text } from "react-native";
import React from "react";
import NavigationView from "../navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Router = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="menu" component={NavigationView} options={{headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
