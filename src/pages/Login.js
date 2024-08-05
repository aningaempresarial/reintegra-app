import React from 'react';
import { View, Text, ImageBackground, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Login';

function Login() {
  
  const [isActive, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/images/fundo-cadastro.png')} resizeMode="cover" style={styles.background}></ImageBackground>
      <View>
        <Text style={styles.title}>Entrar na conta</Text>
        <Text style={styles.text}>Faça o login para continuar</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
        <Icon name='wallet' size={30} color={'rgba(0,0,0,0.5)'}/>
        <TextInput style={isActive? styles.input : styles.input} placeholder='CPF' onFocus={() => setActive(true)} onBlur={() => setActive(false)}/>
        </View>
        <View style={styles.inputBox}>
        <Icon name='key' size={30} color={'rgba(0,0,0,0.5)'}/>
        <TextInput style={isActive? styles.input : styles.input} placeholder='Senha' onFocus={() => setActive(true)} onBlur={() => setActive(false)}/>
        </View>
      </View>
      <Pressable style={styles.button}><Text style={styles.buttonText}>Enviar</Text></Pressable>
    </View>
  );
}

export default Login;
