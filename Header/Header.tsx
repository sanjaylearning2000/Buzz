// Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.name}>Sanjay</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    color: '#333',
  },
});

export default Header;