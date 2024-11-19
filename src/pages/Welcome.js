import React, { useRef, useState } from 'react';
import styles from '../styles/Welcome';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoadingModal from '../components/LoadingModal';
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';

import videoExplicativo from '../../assets/videos/boasvindas.mp4';

function Welcome() {
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
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          style={{ width: '80%', resizeMode: 'contain' }}
          source={require('../../assets/images/logo.png')}
        />

        <View>
          <Text style={styles.headerText}>Olá, seja bem-vindo ao Reintegra!</Text>
          <Text style={styles.headerText}>
            Para começar, assista o nosso{' '}
            <Text style={styles.destaqueText}>vídeo explicativo</Text> sobre o aplicativo:
          </Text>
        </View>

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
                <Icon name="play-outline" size={30} style={styles.helpButton} /></Text>
              </Pressable>
            )}
          </Pressable>
        </View>

        <Pressable
          style={styles.button}
          onPress={async () => {
            handlePause();
            navigation.navigate('Choice');
          }}
        >
          <Text style={styles.buttonText}>Entrar com CPF</Text>
        </Pressable>
      </View>
      <View style={styles.imageDiv}></View>
      <LoadingModal visible={loading} />
    </View>
  );
}

export default Welcome;
