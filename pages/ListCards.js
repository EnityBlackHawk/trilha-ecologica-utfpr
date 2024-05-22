import { useEffect, useState } from "react";
import { addFlora, readFlora } from "../asyncStorage";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { getData } from "../firebase";
import { useNavigation } from "@react-navigation/native";

export default function ListCards() {
  const [cards, setCards] = useState({ data: [] });
  const [data, setData] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    readFlora().then((f) => {
      const _cards = JSON.parse(f);
      setCards(_cards);
      getData().then((d) => {
        setData(d.filter((p) => _cards.data.includes(p.id)));
      });
    });
  }, []);

  return (
    <ScrollView>
      {data?.map((d, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={styles.card}
            onPress={() =>
              navigation.navigate("scan_completed", {
                data: d.id,
                isNew: false,
              })
            }
          >
            <Image
              source={{ uri: d.image }}
              style={{ width: 100, height: 100, borderRadius: 10}}
            />
            <View style={styles.card_text}>
              <Text style={{ fontWeight: 600 }}>{d.nomePopular.value}</Text>
              <Text>
                {d.nomeCientifico.name}: {d.nomeCientifico.value}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
  },
  card_text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
  }
});
