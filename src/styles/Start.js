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
      fontSize: 24
    },
    button: {
      backgroundColor: '#ff914d',
      padding: 20,
      width: '100%',
      paddingHorizontal: 60,
      borderRadius: 5,
      borderStyle: 'solid',
      borderColor: '#fc573b',
      borderWidth: 2
    },
    buttonText: {
      color: '#fff',
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
    }
})