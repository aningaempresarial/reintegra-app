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
        
        <Pressable style={styles.button} onPress={async () => {
          setLoading(true)

          const token = await getItem('token');
          setTimeout(() => {
            if (token) {
              navigation.replace('Home')
            } else {
              navigation.replace("Welcome")
            } 
          }, 500)
        }}>
            <Text style={styles.buttonText}>Continuar</Text>
        </Pressable>
      </View>
      <View style={styles.imageDiv}>
      </View>

      <LoadingModal visible={loading} />
    </View>
  );
}

export default Start;
