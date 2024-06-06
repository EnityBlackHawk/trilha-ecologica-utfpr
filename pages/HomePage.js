import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import logo from '../assets/cachoeira.png';
import logoutfpr from '../assets/logo-utfpr.png';
import { getDataFauna, getData } from '../firebase';

export default function HomeView({ navigation }) {
  getData();
  getDataFauna();
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageLogoWrapper}>
        <View style={styles.imageAndLogoWrapper}>
          <View style={styles.imageLogoContainer}>
            <Image source={logo} style={styles.imageLogo}></Image>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Bem-vindo a trilha ecológica da UTFPR
            </Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.push('menu')}
          >
            <Text style={styles.buttonText}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerWrapper}>
          <Image source={logoutfpr} style={styles.imageUTFPR}></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#AFD6C4',
  },
  imageLogoWrapper: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageAndLogoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 30,
  },
  imageLogoContainer: {
    width: 270,
    height: 270,
  },
  imageLogo: {
    flex: 1,
    width: '100%',
    height: '100%',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    borderRadius: 8,
  },
  textWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    display: 'flex',
    width: 270,
    height: 55,
    backgroundColor: '#E2DD72',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  footerWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUTFPR: {
    width: 200,
    height: 65,
  },
});
