import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    textContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#112257',
      width: '100%',
      textAlign: 'center'
    },
    textCenter: {
      textAlign: 'center'
    },
    text: {
      fontSize: 20,
      width: '90%',
    },
    textJust: {
      fontSize: 20,
      width: '100%',
      textAlign: 'justify'
    },
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 15
    },
    inputBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '70%',
      padding: 10,
      marginVertical: 15,
      borderRadius: 10,
      borderColor: 'rgba(0,0,0,0.3)',
      borderWidth: 1
    },
    input: {
      zIndex: 2,
      fontSize: 20,
      color: 'rgba(0,0,0,0.5)',
      paddingLeft: 10,
      outlineColor: 'transparent'
    },
    button: {
      backgroundColor: '#ff914d',
      padding: 20,
      width: '90%',
      paddingHorizontal: 60,
      borderRadius: 5,
      borderStyle: 'solid',
      borderColor: '#fc573b',
      borderWidth: 2,
      marginTop: 50
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    buttonText2: {
      color: '#112257',
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600',
      width: '100%',
      textAlign: 'center'
    },
    buttonSmallText: {
      color: '#fff',
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600',
      width: '100%',
      textAlign: 'center'
    },
    buttonSmallText2: {
      color: '#112257',
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600',
      width: '100%',
      textAlign: 'center'
    },
    modal: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 10,
      minHeight: 300,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      padding: 20
    },
    boldText: {
      fontWeight: 'bold',
    },
    buttonConfirm: {
      backgroundColor: '#112257',
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 20,
      margin: 10
    },
    button1: {
      backgroundColor: '#ef4232',
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 20,
      margin: 10
    },
    button2: {
      borderColor: '#112257',
      borderWidth: 1,
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 20,
      margin: 10
    },
    botoes: {
      flexDirection: 'row',
      width: '95%'
    },
    errorText: {
      color: '#EE4B2B',
      fontSize: 16,
      width: '90%'
    },
    headerDiv: {
      width: '90%',
      height: 150,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    backButton: {
      color: '#545454'
    },
    helpButton: {
      color: '#1d3da0'
    },
    main: {
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 150
    },
    videoContainer: {
      position: 'relative',
      width: '90%',
      height: 200,
      borderRadius: 5,
      overflow: 'hidden',
      marginTop: 40
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