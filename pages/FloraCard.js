import { Image, View, Text, StyleSheet, Modal, Button } from 'react-native';
import image from '../assets/araucaria.jpg';
import ModalCard from '../components/ModalCard';
import { useState } from 'react';


const floraInfo = {
  classTaxonomica: 'Gimnosperma',
  familiaBotanica: 'Araucariaceae',
  grauAmeaca: 'EN',
  nomePopular: 'Araucária - Pinheiro do Paraná',
  nomeCientifico: 'Araucaria angustifolia (Bertol.) Kuntze',
  biomaEstados: 'FOM (RS-PR)',
  extratoVertical: 'DOSSEL (30m)',
  populacao: 'ABUNDANTE',
  DAP: '50-60 cm',
  solos: 'SOLOS BEM DRENADOS',
  idadeMaxima: '300 anos',
  altitude: '500m - 1200m',
  dispersores: 'Aves-Mamíferos',
  estagio: 'PIONEIRA-MÉDIO',
  produtos: 'MADEIRA, FRUTO'
};

export default function FloraCard({ data, image }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleClick = (description) => {
    setSelectedDescription(description);
    setModalVisible(true);
  };

  return (
    <>
      <Image src={image} style={styles.image}></Image>
      <View style={styles.mainContainer}>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Classificação Taxonômica')}
              style={styles.text}
            >
              {data.classTaxonomica}
            </Text>
            <Text
              onPress={() => handleClick('Família Botânica')}
              style={styles.text}
            >
              {data.familiaBotanica}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Grau de ameaça de extinção')}
              style={styles.textExtinction}
            >
              {data.grauAmeaca}
            </Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text
              onPress={() => handleClick('Nome Popular')}
              style={styles.textName}
            >
              {data.nomePopular}
            </Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text
              onPress={() => handleClick('Nome Científico')}
              style={styles.text}
            >
              {data.nomeCientifico}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Bioma e Estados')}
              style={styles.text}
            >
              {data.biomaEstados}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Extrato Vertical')}
              style={styles.text}
            >
              {data.extratoVertical}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick('População')} style={styles.text}>
              {data.populacao}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('DAP - Diâmetro Altura Peito')}
              style={styles.text}
            >
              {data.DAP}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Solos (Habitat)')}
              style={styles.text}
            >
              {data.solos}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Idade Máxima')}
              style={styles.text}
            >
              {data.idadeMaxima}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Altitude a nível do mar')}
              style={styles.text}
            >
              {data.altitude}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Dispersores')}
              style={styles.text}
            >
              {data.dispersores}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Estágio Médio')}
              style={styles.text}
            >
              {data.estagio}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick('Produtos')} style={styles.text}>
              {data.produtos}
            </Text>
          </View>
        </View>
      </View>
      <ModalCard
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        description={selectedDescription}
      />
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
