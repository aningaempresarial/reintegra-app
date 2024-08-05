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
      letterSpacing: 2,
      color: '#112257',
    },
    text: {
      fontSize: 24,
    },
    inputBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      width: '70%',
      padding: 10,
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