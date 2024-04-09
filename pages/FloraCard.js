import { Image, View, Text, StyleSheet } from 'react-native';
import image from '../assets/araucaria.jpg';

const classTaxonomica = 'Gimnosperma';
const familiaBotanica = 'Araucariaceae';
const grauAmeaca = 'EN';
const nomePopular = 'Araucária - Pinheiro do Paraná';
const nomeCientifico = 'Araucaria angustifolia (Bertol.) Kuntze';
const biomaEstados = 'FOM (RS-PR)';
const extratoVertical = 'DOSSEL (30m)';
const populacao = 'ABUNDANTE';
const DAP = '50-60 cm';
const solos = 'SOLOS BEM DRENADOS';
const idadeMaxima = '300 anos';
const altitude = '500m - 1200m';
const dispersores = 'Aves-Mamíferos';
const estagio = 'PIONEIRA-MÉDIO';
const produtos = 'MADEIRA, FRUTO';

export default function FloraCard() {
  return (
    <>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.mainContainer}>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{classTaxonomica}</Text>
            <Text style={styles.text}>{familiaBotanica}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.textExtinction}>{grauAmeaca}</Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text style={styles.textName}>{nomePopular}</Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text style={styles.text}>{nomeCientifico}</Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{biomaEstados}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{extratoVertical}</Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{populacao}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{DAP}</Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{solos}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{idadeMaxima}</Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{altitude}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{dispersores}</Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{estagio}</Text>
          </View>
          <View style={styles.halfWidth}>
            <Text style={styles.text}>{produtos}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    backgroundColor: '#FAFAFA',
    marginHorizontal: 20,
  },
  doubleLine: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
  },
  singleLine: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  text: { fontSize: 18 },
  halfWidth: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  textExtinction: { color: 'red', fontSize: 20, fontWeight: 'bold' },
  textName: { color: 'black', fontSize: 20, fontWeight: 'bold' },
  image: {
    marginTop: 80,
    height: 200,
    width: 350,
    alignSelf: 'center',
    marginHorizontal: 'auto',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
});
