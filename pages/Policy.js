import { View, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import logoUTFPR from '../assets/logo-utfpr.png';
import logoTrilha from '../assets/logo-trilha.png';

export default function Policy() {
  return (
    <View style={styles.container}>
      <Image source={logoTrilha} style={styles.imageTrilha} />
      <Card title={'POLÍTICA DE PRIVACIDADE'}>
        A Política de Privacidade do aplicativo de Scan de QR Codes para Trilha
        Ecológica na UTFPR assegura que apenas dados anônimos de uso, como
        interações com os QR Codes, são coletados para aprimorar a experiência
        do usuário. O acesso à câmera é solicitado exclusivamente para escanear
        os QR Codes e não é compartilhado. Nenhuma informação pessoal
        identificável é coletada ou compartilhada. Medidas de segurança são
        implementadas para proteger os dados coletados. Qualquer atualização na
        política será comunicada aos usuários. Ao utilizar o aplicativo, o
        usuário concorda com os termos da política de privacidade.
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
