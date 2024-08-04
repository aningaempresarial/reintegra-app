import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    background: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 24
    },
    input: {
      zIndex: 2,
      width: '70%',
      backgroundColor: '#fff',
      padding: 10,
      fontSize: 20,
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth: 1,
      borderRadius: 10,
      color: 'rgba(0,0,0,0.5)'
    },
    button: {
      backgroundColor: '#112257',
      padding: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600'
    }
})