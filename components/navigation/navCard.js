import { View, StyleSheet, Text } from "react-native";



export default function NavCard({ title, text, svg }) {
  return (
    <View style={styles.container}>
      {svg}
      <Text
        style={{
          textTransform: "uppercase",
          fontWeight: "600",
          marginBottom: 5,
        }}
      >
        {title}
      </Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderEndWidth: 1,
    borderStartWidth: 1,
    width : '40%',
    height: '30%',
    padding: 10,
    paddingVertical: 20,
    borderRadius: 16,
  },
});
