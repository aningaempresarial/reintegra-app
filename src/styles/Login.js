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
      position: 'absolute',
      opacity: 0.9
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
      width: 'calc(70% + 30px)',
      padding: 15,
    },
    text: {
      fontSize: 20,
      width: 'calc(70% + 30px)',
      paddingHorizontal: 15
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
      backgroundColor: '#112257',
      padding: 10,
      paddingHorizontal: 20,
      borderColor: '#fff'
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600'
    }
})