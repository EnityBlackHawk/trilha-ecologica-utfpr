import { View, Text, StyleSheet, Pressable } from 'react-native';

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={onPress}
        android_ripple={{ color: '#AFD6C4' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderWidth: 1,
    borderRadius: 16,
    margin: 16,
    overflow: 'hidden',
    elevation: 40,
    shadowColor: '#AFD6C4',
  },
  buttonInnerContainer: {
    backgroundColor: '#FAFAFA',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
