import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    headerDiv: {
      flex: 4,
      width: '90%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    headerText: {
      fontSize: 20,
      textAlign: 'justify'
    },
    button: {
      backgroundColor: '#fff',
      padding: 20,
      paddingHorizontal: 60,
      borderRadius: 5,
      borderStyle: 'solid',
      borderColor: '#112257',
      borderWidth: 2,
      width: '100%',
    },
    buttonText: {
      color: '#112257',
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    imageDiv: {
      flex: 0.4,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    imgDeco: {
      resizeMode: 'contain',
      height: '100%'
    },
    destaqueText: {
      fontWeight: 'bold'
    },
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: 200,
      borderRadius: 5,
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: '100%',
      backgroundColor: 'black'
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -25 }, { translateY: -25 }],
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 10,
      padding: 10,
    },
    playButtonText: {
      color: '#fff',
      fontSize: 24,
    },
})