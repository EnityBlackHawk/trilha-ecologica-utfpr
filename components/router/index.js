import { View, Text } from "react-native";
import React from "react";
import NavigationView from "../navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QrCodeScanner from "../qr-code-scanner";
import ScanCompletedPage from "../qr-code-scanner/completedPage";

export const RouterSpecs = {
  Menu: { name: "menu", component: NavigationView },
  QrScanner: { name: "qr_scanner", component: QrCodeScanner },
  ScanCompleted: { name: "scan_completed", component: ScanCompletedPage },
};

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.keys(RouterSpecs).map((e) => (
          <Stack.Screen
            key={e}
            name={RouterSpecs[e].name}
            component={RouterSpecs[e].component}
            options={{ headerShown: false }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
