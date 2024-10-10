import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flex: 1,
      width: '100%',
      paddingTop: 20
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#112257',
      textAlign: 'left',
      width: '60%',
    },
    subtitle: {
      fontSize: 20,
      fontWeight: '400',
      letterSpacing: 2,
      color: '#112257',
      textAlign: 'left',
      width: '100%',
    },
    main: {
      flex: 5,
      flexDirection: 'column',
      width: '95%',
      marginTop: 10
    },
    card: {
      justifyContent: 'center',
      flex: 1,
      width: '100%',
      padding: 20,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
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
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 15
    },
    inputCidadeEstado: {
      flexDirection: 'row',
      margin: 10
    },
    cardN: {
      height: 'auto',
      width: '100%',
      padding: 10,
      justifyContent: 'center',
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      flex: 3,
    },
    textCard: {
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 2,
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'left',
      width: '100%',
      flex: 1,
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