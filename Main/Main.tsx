// Main.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BubbleButton from '../BubbleButton/BubbleButton';

const Main = () => {
  return (
    <View style={styles.main}>
      <BubbleButton />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative', // Ensure the button is positioned relative to this container
  },
});

export default Main;