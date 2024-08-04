import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Signup';

function Signup() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/fundo-cadastro.png')} resizeMode="cover" style={styles.background}></ImageBackground>
      <Text style={styles.title}>Criar uma conta</Text>
      <Text style={styles.text}>Preencha com os seus dados</Text>
      <TextInput style={styles.input} placeholder='Nome completo'/>
      <TextInput style={styles.input} placeholder='CPF'/>
      <TextInput style={styles.input} placeholder='E-mail'/>
      <TextInput style={styles.input} placeholder='Senha'/>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Enviar</Text></TouchableOpacity>
    </View>
  );
}

export default Signup;
