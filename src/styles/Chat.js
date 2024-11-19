import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f5f8ff'
  },
  title: {
    fontSize: 20,
    letterSpacing: 2,
    color: '#112257',
    textAlign: 'center',
    width: '90%',
    marginVertical: 20,
    fontFamily: 'Poppins_700Bold'
  },
  main: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  conversaDiv: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
  },
  textEnviadoDiv: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textRecebidoDiv: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'right',
    alignItems: 'center'
  },
  imgMensagem: {
    width: 50,
    height: 50,
    borderRadius: 100,
    borderWidth: 0.3,
    borderColor: 'black',
    marginHorizontal: 5
  },
  recebidoMensagem: {
    backgroundColor: '#cbf5ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%'
  },
  enviadoMensagem: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%'
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
  },
  text: {
    padding: 10,
    width: '100%'
  }
});
