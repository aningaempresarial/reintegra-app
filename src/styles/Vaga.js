import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 5,
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    flex: 1,
    letterSpacing: 2,
    color: '#112257',
    textAlign: 'center',
    width: '90%',
    marginBottom: 20,
    fontFamily: 'Poppins_700Bold',
  },
  imgVagaContainer: {
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  imgVaga: {
    height: '100%',
    width: '100%',
    borderRadius: 10
  },
  detalhesVagaContainer: {
    width: '90%'
  },
  detalhesVaga: {
    textAlign: 'justify',
    marginBottom: 5,
    fontSize: 20,
  },
  btnVaga: {
    backgroundColor: '#414d86',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20
  },
  textBtnVaga: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 1.5,
    fontWeight: '500'
  },
});
