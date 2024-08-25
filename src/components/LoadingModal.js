import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingModal = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        
        <Image style={{ width: '80%', resizeMode: 'contain', marginBottom: 10 }} source={require('../../assets/images/logo.png')}/>
        <ActivityIndicator size="large" color="#000000" />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%'
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoadingModal;
