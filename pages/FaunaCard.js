import { Image, View, Text, StyleSheet, Modal, Button } from "react-native";
import image from "../assets/araucaria.jpg";
import ModalCard from "../components/ModalCard";
import { useState } from "react";

export default function FaunaCard({ route }) {
  const data = route.params.data;
  const image = route.params.image;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const handleClick = (description) => {
    setSelectedDescription(description);
    setModalVisible(true);
  };

  return (
    <>
      <Image source={{ uri: image }} style={styles.image}></Image>
      <View style={styles.mainContainer}>
        <View style={styles.singleLine}>
          <View>
            <Text
              onPress={() => handleClick("Tipo")}
              style={styles.textName}
            >
              {data.tipo.value}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick("Classe Taxonômica")}
              style={styles.text}
            >
              {data.classTaxonomica.value}
            </Text>
            <Text
              onPress={() => handleClick("Nome Científico")}
              style={styles.text}
            >
              {data.nomeCientifico.value}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick("Grau de ameaça de extinção")}
              style={styles.textExtinction}
            >
              {data.grauAmeaca.value}
            </Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text
              onPress={() => handleClick("Nome Popular")}
              style={styles.textName}
            >
              {data.nomePopular.value}
            </Text>
          </View>
        </View>
        <View style={styles.singleLine}>
          <View>
            <Text onPress={() => handleClick("Peso")} style={styles.text}>
              {data.peso.value}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick("Bioma")} style={styles.text}>
              {data.bioma.value}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick("Comprimento")}
              style={styles.text}
            >
              {data.comprimento.value}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick("Alimentação")}
              style={styles.text}
            >
              {data.alimentacao.value}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick("Habitat")} style={styles.text}>
              {data.habitat.value}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick("Habitos")} style={styles.text}>
              {data.habitos.value}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick("Territorio")} style={styles.text}>
              {data.territorio.value}
            </Text>
          </View>
        </View>
        <View style={styles.doubleLine}>
          <View style={styles.halfWidth}>
            <Text onPress={() => handleClick("Reprodução")} style={styles.text}>
              {data.reproducao.value}
            </Text>
          </View>
          <View style={styles.halfWidth}>
            <Text
              onPress={() => handleClick("Longevidade")}
              style={styles.text}
            >
              {data.longevidade.value}
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
    backgroundColor: "#FAFAFA",
    marginHorizontal: 20,
  },
  doubleLine: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  singleLine: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
  text: { fontSize: 18 },
  halfWidth: { flex: 1, justifyContent: "center", alignItems: "center" },
  textExtinction: { color: "red", fontSize: 20, fontWeight: "bold" },
  textName: { color: "black", fontSize: 20, fontWeight: "bold" },
  image: {
    marginTop: 80,
    height: 200,
    width: 350,
    alignSelf: "center",
    marginHorizontal: "auto",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
});
