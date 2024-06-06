import { Image, View, Text, StyleSheet, Modal, Button } from 'react-native';
import image from '../assets/araucaria.jpg';
import ModalCard from '../components/ModalCard';
import { useState } from 'react';



export default function FloraCard({ data, image }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  const handleClick = (description) => {
    setSelectedDescription(description);
    setModalVisible(true);
  };

  return (
    <>
      <Image source={{uri : image}} style={styles.image}></Image>
      <View style={styles.mainContainer}>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Classe Taxonômica')}
              style={styles.text}
            >
              {data.classTaxonomica}
            </Text>
            <Text
              onPress={() => handleClick('Nome Científico')}
              style={styles.text}
            >
              {data.nomeCientifico}
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
              onPress={() => handleClick('Fitofisionomia')}
              style={styles.text}
            >
              {data.fitofisionomia}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Bioma')}
              style={styles.text}
            >
              {data.bioma}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Altura')}
              style={styles.text}
            >
              {data.altura}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick('Diametro')} style={styles.text}>
              {data.diametro}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Habitat')}
              style={styles.text}
            >
              {data.habitat}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Longevidade')}
              style={styles.text}
            >
              {data.longevidade}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Dispersão')}
              style={styles.text}
            >
              {data.dispersao}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Uso')}
              style={styles.text}
            >
              {data.uso}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('Polinizadores')}
              style={styles.text}
            >
              {data.polinizacao}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick('GS')}
              style={styles.text}
            >
              {data.gs}
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
