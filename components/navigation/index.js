import { View, StyleSheet, Text } from "react-native";
import NavCard from "./navCard";
import Pin from "../../assets/pin.svg";
import QrCode from "../../assets/qr-code-outline.svg";
import Card from "../../assets/card.svg";
import Photos from "../../assets/fotos.svg";
import Feedback from "../../assets/feedback.svg";
import Settings from "../../assets/settings.svg";

export default function NavigationView({ nav }) {
  const destinationNames = {
    qr: "qr_scanner",
  };

  const pin_icon = <Pin style={styles.icons} width={40} />;
  const qr_icon = <QrCode style={styles.icons} width={45} height={45} />;
  const card_icon = <Card style={styles.icons} width={40} />;
  const photos_icon = <Photos style={styles.icons} width={40} />;
  const feedback_icon = <Feedback style={styles.icons} width={40} />;
  const settings_icon = <Settings style={styles.icons} width={40} />;

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <NavCard title={"Mapa"} text={"Explore a trilha"} svg={pin_icon} />
        <NavCard
          title={"Ler QR Code"}
          text={"Aprenda sobre a fauna e a flora"}
          svg={qr_icon}
        />
        <NavCard title={"Cards"} text={""} svg={card_icon} />
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
        <NavCard title={"Ajustes"} text={""} svg={settings_icon} />
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
