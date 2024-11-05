import { StyleSheet, TouchableOpacityBase } from "react-native";


export default createStyle = (fontSize) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flex: 1,
      width: '100%',
      paddingTop:15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: fontSize+4,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: '#112257',
      textAlign: 'center',
      width: '95%',
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 1,
      color: '#112257',
      textAlign: 'center',
      width: '95%',
    },
    subtitle: {
      fontSize: fontSize-3,
      fontWeight: 'light',
      textAlign: 'left',
      paddingTop: '10%'
    },
    subsubtitle: {
      fontSize:14,
      margin: 15,
      fontWeight: 'light',
      textAlign: 'center',
      paddingTop: '2%',
      color: 'grey'

    },
    content:{
      backgroundColor: 'white',
      borderWidth: 0.5,
      borderColor: 'black',
      margin: 4
    },
    icones:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    
    qrcode:{
      backgroundColor: 'white',
      borderRadius: 30,
      margin: 4
    },
    options: {
      fontWeight: '600',
      fontSize: fontSize-2,
      letterSpacing: 1,
      flex: 1,
      margin: 10
    },
    imgEditContainer: {
      
      margin: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgEdit: {
      width: 200,
      height: 200,
      borderRadius: 100
    },
    line: {
      height: 1, 
      width: '100%', 
      backgroundColor: 'orange',
      marginTop: 15
    },
    greyLine: {
      height: 1.5, 
      width: '100%', 
      backgroundColor: 'grey',
      marginTop: 15,
      marginBottom: 20,
      
    },
    switchButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonOptions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 2,
      marginLeft: 2,
      paddingLeft: 15,
      paddingRight: 15  
    },
    cardCompartilharContainer: {
      flexDirection: 'row',
      height: 150,
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 10
    },
    cardCompartilhar: {
      backgroundColor: '#fff',
      height: 150,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 10,
      marginHorizontal: 8,
    },
    textCompartilhar: {
      fontSize: 15,
      width: '100%',
      fontWeight: '400',
      letterSpacing: 1,
      color: 'grey',
      textAlign: 'center',
    },
    topics: {
      fontSize: 18.5,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    termos: {
      fontWeight: 'bold'
    },
    textoCorrido: {
      fontSize: fontSize-3,
      marginBottom: 15
    },
    inputDiv: {
      width: '100%',
      height: 50,
      backgroundColor: 'white',
      margin: 10,
      
    },
    input: {
      width: '100%',
      padding: 10
    }  
  })
}