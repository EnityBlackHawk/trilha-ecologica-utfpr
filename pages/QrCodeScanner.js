import { View, Text } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera/next";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function QrCodeScanner({navigation}) {
  const [permissiton, requestPermission] = useCameraPermissions();

  if(!permissiton){
    requestPermission();
  }

  const onQrScanned = (scanningResult) => {
    navigation.navigate("scan_completed", {data : scanningResult.data, isNew: true});
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing="back"
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={onQrScanned}
      >
        <View></View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#AFD6C4",
  },
  camera: {
    width: 500,
    height: "70%",
    backgroundColor: "yellow",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
