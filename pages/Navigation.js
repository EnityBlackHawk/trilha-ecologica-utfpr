import { View, StyleSheet, Text } from "react-native";
import NavCard from "../components/navCard";
import Pin from "../assets/pin.svg";
import QrCode from "../assets/qr-code-outline.svg";
import Card from "../assets/card.svg";
import Photos from "../assets/fotos.svg";
import Feedback from "../assets/feedback.svg";
import Info from "../assets/info.svg";
import * as Linking from 'expo-linking';

export default function NavigationView({ navigation }) {
  const pin_icon = <Pin style={styles.icons} width={40} />;
  const qr_icon = <QrCode style={styles.icons} width={45} height={45} />;
  const card_icon = <Card style={styles.icons} width={40} />;
  const photos_icon = <Photos style={styles.icons} width={40} />;
  const feedback_icon = <Feedback style={styles.icons} width={40} />;
  const info_icon = <Info style={styles.icons} width={45} />;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <NavCard
          title={"Mapa"}
          text={"Explore a trilha"}
          svg={pin_icon}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/SL42WC5yzN754KWq5")
          }
        />
        <NavCard
          title={"Ler QR Code"}
          text={"Aprenda sobre a fauna e a flora"}
          svg={qr_icon}
          onPress={() => navigation.navigate("qr_scanner")}
        />
        <NavCard
          title={"Cards"}
          text={""}
          svg={card_icon}
          onPress={() => navigation.navigate("Cards_Flora_Fauna")}
        />
        <NavCard
          title={"Fotos"}
          text={"Poste suas fotos da trilha"}
          svg={photos_icon}
        />
        <NavCard
          title={"Feedback"}
          text={"Fale sua experiencia na trilha"}
          svg={feedback_icon}
        />
        <NavCard
          title={"Sobre"}
          text={""}
          svg={info_icon}
          onPress={() => navigation.navigate("Info")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    marginBottom: 10,
  },
});
