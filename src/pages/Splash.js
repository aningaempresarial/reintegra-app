import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/Splash';
import { LinearGradient } from 'expo-linear-gradient';

function Splash() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ff5e43', '#ff8b44']} style={styles.background}/>
      <Image source={require('../../assets/images/logo-alternativa.png')} />
    </View>
  );
}

export default Splash;
