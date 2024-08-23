import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    headerDiv: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    headerText: {
      fontSize: 24,
      width: 280,
      textAlign: 'justify'
    },
    button1: {
      backgroundColor: '#ef4232',
      padding: 20,
      paddingHorizontal: 20,
      width: 300,
      borderRadius: 50,
      margin: 20
    },
    button2: {
      backgroundColor: '#112257',
      padding: 20,
      paddingHorizontal: 20,
      width: 300,
      borderRadius: 50,
      margin: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'bold',
      textAlign: 'center'
    },
})