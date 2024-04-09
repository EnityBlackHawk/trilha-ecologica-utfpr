import React from 'react';
import NavigationView from '../pages/Navigation';
import HomeView from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrCodeScanner from '../pages/QrCodeScanner';
import ScanCompletedPage from '../pages/completedPage';
import About from '../pages/About';
import Policy from '../pages/Policy';
import Terms from '../pages/Terms';

export const RouterSpecs = {
  Menu: { name: 'menu', component: NavigationView, display_name: 'Menu' },
  QrScanner: {
    name: 'qr_scanner',
    component: QrCodeScanner,
    display_name: 'Qr Code Scanner',
  },
  ScanCompleted: {
    name: 'scan_completed',
    component: ScanCompletedPage,
    display_name: 'Scan Completed',
  },
  About: {
    name: 'AboutUs',
    component: About,
    display_name: 'About US',
  },
  Policy: {
    name: 'Politica',
    component: Policy,
    display_name: 'Política de Privacidade',
  },
  Terms: {
    name: 'Termos',
    component: Terms,
    display_name: 'Termos de Uso',
  },
};

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#AFD6C4',
          },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#FAFAFA' },
        }}
      >
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
              headerTitle: RouterSpecs[e].display_name,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
