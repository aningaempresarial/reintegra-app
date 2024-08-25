import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    text: {
      fontSize: 16,
      width: '90%',
    },
    textJust: {
      fontSize: 16,
      width: '100%',
      textAlign: 'justify'
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
    pinInput: {
      width: 25,
      height: 50,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderRadius: 0,
      borderBottomWidth: 2,
      borderColor: '#ef4232'
    },
    errorText: {
      color: '#EE4B2B',
      fontSize: 18,
      width: '90%'
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
      minHeight: 250,
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
    botoes: {
      flexDirection: 'row',
      width: '95%',
    },
    errorText: {
      color: '#EE4B2B',
      fontSize: 16,
      width: '90%'
    },
    button3: {
      backgroundColor: '#ef4232',
      borderColor: '#ef4232',
      borderWidth: 1,
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 10,
      margin: 5
    },
    button4: {
      borderColor: '#112257',
      borderWidth: 1,
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 10,
      margin: 5
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
})