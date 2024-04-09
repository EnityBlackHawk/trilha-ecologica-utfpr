import { View, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import logoUTFPR from '../assets/logo-utfpr.png';
import logoTrilha from '../assets/logo-trilha.png';

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={logoTrilha} style={styles.imageTrilha} />
      <Card title={'SOBRE NÓS'}>
        APP Criado pelos acadêmicos do curso de Engenharia de Software: Bruno
        Henrique Bissotto; Gabriela Barbieri; João Vitor de Azevedo; Lilian
        Fiori; Luan Felipe Marmentini; Luca Aguiar Costa Carvalho; Lucas Gabriel
        Winter; Miguel da Silva Peloso; Rafael Couto Lira e Rogerio Myszko Brum.
      </Card>
      <Image source={logoUTFPR} style={styles.imageUTFPR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  imageUTFPR: { width: 190, height: 60 },
  imageTrilha: { width: 100, height: 100 },
});
