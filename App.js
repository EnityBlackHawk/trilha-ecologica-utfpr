import "regenerator-runtime/runtime";
import "expo-firestore-offline-persistence";
import "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Router from "./router";
import FloraCard from "./pages/FloraCard";
import { useEffect } from "react";
import { getData } from "./firebase";

export default function App() {

  useEffect(() => {
    getData();
  }, [])

  return <Router />;
}
