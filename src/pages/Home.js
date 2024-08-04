import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/Home';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../../assets/images/logo.png')}/>
        <Text style={styles.headerText}>Olá, seja bem-vindo!</Text>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageDiv}>
        <Image style={styles.imgDeco} source={require('../../assets/images/home-deco.png')}/>
      </View>
    </View>
  );
}

export default Home;
