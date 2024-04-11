import React from 'react';
import NavigationView from '../pages/Navigation';
import HomeView from '../pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrCodeScanner from '../pages/QrCodeScanner';
import ScanCompletedPage from '../pages/completedPage';
import Info from '../pages/Info';
import Policy from '../pages/Policy';
import Terms from '../pages/Terms';
import About from '../pages/About';
import TelaCards from '../pages/Cards';
import FloraCard from '../pages/FloraCard';

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
  Info: {
    name: 'Info',
    component: Info,
    display_name: 'Sobre',
  },
  About: {
    name: 'About',
    component: About,
    display_name: 'Sobre Nós',
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
  Cards: {
    name: 'Cards_Flora_Fauna',
    component: TelaCards,
    display_name: 'Cards da Flora e Fauna',
  },

  FloraCard: {
    name : 'flora_card',
    component : FloraCard,
    display_name : 'Flora Card'
  }

};

const Router = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FAFAFA',
          },
          headerTintColor: 'black',
          contentStyle: { backgroundColor: 'white' },
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
