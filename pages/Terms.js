import { View, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import logoUTFPR from '../assets/logo-utfpr.png';
import logoTrilha from '../assets/logo-trilha.png';

export default function Terms() {
  return (
    <View style={styles.container}>
      <Image source={logoTrilha} style={styles.imageTrilha} />
      <Card title={'TERMOS DE USO'}>
        O aplicativo de scan de QR Codes foi desenvolvido pela UTFPR para
        auxiliar os usuários na navegação pela trilha ecológica. Ao utilizá-lo,
        o usuário concorda integralmente com os termos estabelecidos. É de
        responsabilidade do usuário garantir que seu dispositivo móvel esteja em
        condições adequadas durante o uso do aplicativo durante a trilha. Para
        escanear os QR Codes ao longo da trilha, o aplicativo pode solicitar
        acesso à câmera do dispositivo. O usuário deve seguir todas as
        instruções de segurança fornecidas pelo aplicativo e pela trilha, além
        de estar ciente de que dados anônimos podem ser coletados para aprimorar
        a experiência do usuário. A UTFPR não se responsabiliza por danos,
        acidentes ou perdas ocorridos durante o uso do aplicativo ou na trilha.
        O conteúdo apresentado no aplicativo é apenas para fins informativos,
        sem garantia de precisão. Qualquer uso ilegal do aplicativo é
        estritamente proibido. A UTFPR reserva-se o direito de modificar ou
        encerrar o aplicativo a qualquer momento, sem aviso prévio.
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
