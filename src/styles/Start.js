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
      fontSize: 24
    },
    button: {
      backgroundColor: '#ef4232',
      padding: 20,
      paddingHorizontal: 40,
      borderRadius: 50
    },
    buttonText: {
      color: '#fff',
      fontSize: 24,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'bold'
    },
    imageDiv: {
      flex: 0.8,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'flex-end'
    },
    imgDeco: {
      resizeMode: 'contain',
      height: '100%'
    }
})