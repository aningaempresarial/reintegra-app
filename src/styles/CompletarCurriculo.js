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
      paddingTop:15
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
      fontSize: 18,
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
      marginTop: 2
    },
    
    button: {
      backgroundColor: '#112257',
      paddingHorizontal: 5,
      borderColor: '#fff',
      borderRadius: 10
    },

    buttonText: {
      color: '#fff',
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: '600',
      width: '100%',
      textAlign: 'center'
    },
    button1: {
      backgroundColor: '#ef4232',
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 20,
      margin: 2
    },
    button2: {
      borderColor: '#112257',
      borderWidth: 1,
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 20,
      margin: 5
    },
    experiencias:{
      width: '95%',
      justifyContent: 'space-between',
    },
    experienciasText:{
      color: '#000',
      fontSize: 15,
      fontWeight: '400',
      width: '100%',
    },
    experiencia1:{
      backgroundColor: '#d5d0d0',
      padding: 20,
      paddingHorizontal: 20,
      flex: 1,
      borderRadius: 15,
      margin: 2
    },
    precisaDeAjuda:{
      flexDirection: 'row',
      alignItems: 'center',        
      margin: 25
    },
    ajudaText:{
      fontSize: 30,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      textDecorationLine: 'underline',
    },
    botoes: {
      flexDirection: 'row',
    },
    inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginVertical: 15
    },
    inputCidadeEstado: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',        
      marginTop: 10
    },
    textInformacoes: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      textTransform: 'uppercase',
      textAlign: 'left',
      width: '100%',
      flex: 1,
      textAlign: 'center'
    },
    adicionarInformacoes:{
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center',        
      margin: 25
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