import { StyleSheet } from "react-native";



export default createStyle = (fontSize) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      flex: 1,
      width: '90%',
      paddingTop:15
    },
    title: {
      fontSize: fontSize+4,
      fontWeight: 'bold',
      textAlign: 'left',
      width: '100%',
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
    scrollContainer: {
      width: '100%',
      backgroundColor: '#f5f8ff'
    },
    header: {
      width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 10,
    },
    empresaNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    localizacao: {
        fontSize: 14,
        color: '#777',
        marginBottom: 5,
    },
    descricao: {
      fontSize: fontSize,
      textAlign: 'center',
      color: '#555',
      paddingHorizontal: 20,
    },
    verMais: {
        fontSize: fontSize,
        color: '#0066cc',
        marginTop: 5,
    },
    main: {
        padding: 20,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    publicacao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    publicacaoImg: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    publicacaoInfo: {
        flex: 1,
    },
    publicacaoTitulo: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    publicacaoData: {
        fontSize: 12,
        color: '#888',
    },
    publicacaoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    time: {
        fontSize: 14,
        color: 'gray',
    },
    fundoazul: {
      width: '100%', 
      height: 150,  
    },
    empresa: {
        width: 100,
        height: 100,
        borderRadius: 100,
        position: 'absolute',
        bottom: -45,
        left: 20,
    },
    nome: { 
        fontSize: fontSize+6, 
        fontWeight: 'bold', 
        marginTop: 70
    },
    local: { 
      fontSize: fontSize,
      color: '#777',
      marginBottom: 3,
    },
    descricao: { 
      fontSize: fontSize, 
      textAlign: 'justify', 
      letterSpacing: 1, 
      marginTop: 2, 
      marginRight: 15
    },
    text1: {
        fontSize: fontSize+4, 
        fontWeight: 'bold', 
        marginTop: 30, 
        paddingRight:20
    },
    text2:{
        fontSize: fontSize-2, 
        color: 'blue', 
        fontStyle: 'italic',
        marginTop: 36,
        marginLeft: 5,
        marginRight: 20
    },
    cantinho: {
         flexDirection: 'row', 
         alignItems: 'center',
        marginLeft: 9,
        marginRight: 25,
        flexDirection: 'column',
    },
    vagas: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 25, 
    },
    text3: {
      fontSize: 15, 
      fontWeight: 'bold', 
      marginTop: 30, 
      paddingRight:20
    },
    text4: {
      fontSize: fontSize-4, 
      color: 'gray',
      fontWeight: '400',
    },
    imagemmapa: {
      width: '100%',
      height: 200,
      marginTop: 18,
      marginRight: 20,
    },
    containers: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    map: {
      width: '100%',
      height: 500,
      marginVertical: 20,
    },
    customMarker: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 60,
      borderRadius: 60,
      backgroundColor: 'black'
    },
    markerBackground: {
      width: 60,
      height: 60,
      backgroundColor: 'transparent',
      position: 'absolute',
    },
    markerLogo: {
      width: 60,
      height: 60,
      borderRadius: 60,
    },
  });
}
