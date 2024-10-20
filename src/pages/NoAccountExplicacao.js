import React, { useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/NoAccountExplicacao";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ResizeMode, Video } from "expo-av";


import videoExplicativo from '../../assets/videos/teste.mp4';

function NoAccountExplicacao({ route }) {
  
  const { cpf } = route.params || {};
  const navigation = useNavigation();
  

  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = async () => {
    await videoRef.current.playAsync();
    setIsPlaying(true);
  };

  const handlePause = async () => {
    await videoRef.current.pauseAsync();
    setIsPlaying(false);
  };

  const handleVideoPress = async () => {
    if (isPlaying) {
      await handlePause();
    } else {
      await handlePlay();
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerDiv}>
        <Icon name="chevron-back-outline" size={60} style={styles.backButton} onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/icons/reintegra-fechadura.png')} style={{ height: 60, resizeMode: 'contain' }} />
        <Icon name="help-circle-outline" size={60} style={styles.helpButton} />
      </View>


      <ScrollView style={{ width: '100%'}}>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Criar uma conta</Text>
          <Text style={[styles.text, styles.textCenter]}>Verificamos que você ainda não possui uma conta. Vamos começar?</Text>
        </View>

        <View style={styles.main}>

          <View style={styles.videoContainer}>
            <Pressable onPress={handleVideoPress} style={styles.videoPressable}>
              <Video
                ref={videoRef}
                style={styles.video}
                source={videoExplicativo}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                isLooping={false}
              />
              {!isPlaying && (
                <Pressable style={styles.playButton} onPress={handlePlay}>
                  <Text style={styles.playButtonText}>
                  <Icon name="play-outline" size={30}/></Text>
                </Pressable>
              )}
            </Pressable>
          </View>

          <Pressable
            style={styles.button}
            onPress={async () => {
              handlePause();
              navigation.navigate('Signup', { cpf });
            }}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </Pressable>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ color: '#1d3da0', fontSize: 20, textDecorationLine: 'underline' }}>Precisa de Ajuda?</Text>
            <Icon name="help-circle-outline" size={35} style={{ color: '#1d3da0' }} />
          </View>

        </View>
       
      </ScrollView>

    </SafeAreaView>
  );
}

export default NoAccountExplicacao;
