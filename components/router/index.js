import React from "react";
import NavigationView from "../navigation";
import HomeView from "../../pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QrCodeScanner from "../qr-code-scanner";
import ScanCompletedPage from "../qr-code-scanner/completedPage";

export const RouterSpecs = {
  Menu: { name: "menu", component: NavigationView, display_name : "Menu" },
  QrScanner: { name: "qr_scanner", component: QrCodeScanner, display_name : "Qr Code Scanner" },
  ScanCompleted: { name: "scan_completed", component: ScanCompletedPage, display_name : "Scan Completed" },
};

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
        {Object.keys(RouterSpecs).map((e) => (
          <Stack.Screen
            key={e}
            name={RouterSpecs[e].name}
            component={RouterSpecs[e].component}
            options={{
              headerTitle : RouterSpecs[e].display_name,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
