import { View, Text, StyleSheet } from 'react-native';

export default function Card({ children, title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.regularText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    height: 500,
    width: 350,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: { fontWeight: 'bold', fontSize: 24, paddingBottom: 12 },
  regularText: { fontSize: 15, textAlign: 'justify' },
});
