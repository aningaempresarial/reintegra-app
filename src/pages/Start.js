import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../styles/Start';
import { useNavigation } from '@react-navigation/native';
import { getItem } from '../functions/AsyncStorage';
import LoadingModal from '../components/LoadingModal';

function Start() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image style={{width: '80%', resizeMode: 'contain'}} source={require('../../assets/images/logo.png')}/>
        <Text style={styles.headerText}>Olá, seja bem-vindo!</Text>
        <Pressable style={styles.button} onPress={async () => {
          setLoading(true)

          const token = await getItem('token');
          if (token) {
            setLoading(false)
            navigation.replace('Home')
          } else {
            setLoading(false)
            navigation.navigate("Choice")
          } 

        }}>
            <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
      <View style={styles.imageDiv}>
        <Image style={styles.imgDeco} source={require('../../assets/images/home-deco.png')}/>
      </View>

      <LoadingModal visible={loading} />
    </View>
  );
}

export default Start;
