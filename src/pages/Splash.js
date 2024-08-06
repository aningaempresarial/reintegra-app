import React from 'react';
import { View, Image } from 'react-native';
import styles from '../styles/Splash';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const temporizador = setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
    return () => clearTimeout(temporizador);
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#ff5e43', '#ff8b44']} style={styles.background}/>
      <Image source={require('../../assets/images/logo-alternativa.png')} />
    </View>
  );
}

export default Splash;
