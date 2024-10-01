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
});
