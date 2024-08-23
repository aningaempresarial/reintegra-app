import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/Start';
import { useNavigation } from '@react-navigation/native';

function Start() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../../assets/images/logo.png')}/>
        <Text style={styles.headerText}>Olá, seja bem-vindo!</Text>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Choice")}>
            <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
      <View style={styles.imageDiv}>
        <Image style={styles.imgDeco} source={require('../../assets/images/home-deco.png')}/>
      </View>
    </View>
  );
}

export default Start;
