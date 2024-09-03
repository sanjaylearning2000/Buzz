// BubbleButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const BubbleButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Buzz</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ff6347',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -50, // Adjusted to ensure the button is centered
    marginLeft: -50, // Adjusted to ensure the button is centered
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BubbleButton;