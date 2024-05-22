import { StyleSheet, Text, View } from "react-native";
import { getData, storage } from "../firebase";
import React, { useEffect, useState } from "react";
import FloraCard from "./FloraCard";
import { addFlora } from "../asyncStorage";

const ScanCompletedPage = ({ navigation, route }) => {
  const [data, setData] = useState();
  const [imageURl, setImageURL] = useState();

  useEffect(() => {
    if (route.params.isNew) addFlora(route.params.data);
    getData().then((data) => {
      const selected = data.filter((e) => e.id === route.params.data);
      const dS = {};
      Object.keys(selected[0]).forEach((key) => {
        dS[key] = selected[0][key].value ?? selected[0][key];
      });
      // const imageRef = ref(storage, selected[0].image);
      // getDownloadURL(imageRef).then((url) => {
      //   setImageURL(url);
      // });
      setData(dS);
    });
  }, []);

  return (
    <View style={styles.container}>
      {data && <FloraCard data={data} image={data.image} />}
    </View>
  );
};

export default ScanCompletedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "stretch",
  },
});
