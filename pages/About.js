import { View, StyleSheet, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import logoUTFPR from '../assets/logo-utfpr.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function About() {
  const navigation = useNavigation();

  const navigateToAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  const navigateToTermsOfUse = () => {
    navigation.navigate('Termos');
  };

  const navigateToPrivacyPolicy = () => {
    navigation.navigate('Politica');
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <PrimaryButton>SOBRE NÓS</PrimaryButton>
        <PrimaryButton onPress={navigateToTermsOfUse}>
          TERMOS DE USO
        </PrimaryButton>
        <PrimaryButton onPress={navigateToPrivacyPolicy}>
          POLÍTICA DE PRIVACIDADE
        </PrimaryButton>
      </View>
      <Image source={logoUTFPR} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonsContainer: { marginTop: 64 },
  image: { width: 190, height: 60 },
});
