import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    letterSpacing: 2,
    color: '#112257',
    textAlign: 'center',
    width: '90%',
    marginVertical: 20,
    fontFamily: 'Poppins_700Bold'
  },
  main: {
    flex: 5,
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBarContainer: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%'
  },
  searchBar: {
    fontSize: 22,
    padding: 5,
    paddingLeft: 10,
  },
  searchBarDiv: {
    flex: 3,
    justifyContent: 'flex-start'
  },
  searchIconDiv: {
    flex: 0.4,
    justifyContent: 'flex-end'
  },
  listaContatosContainer: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgba(0,0,0,0.6)',
    borderBottomWidth: 0.5
  },
  contatoDiv: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    borderTopColor: 'rgba(0,0,0,0.6)',
    borderTopWidth: 0.5,
    backgroundColor: 'white',
  },
  imgContatoContainer: {
    width: '30%',
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContato: {
    width: 70,
    height: 70,
    borderRadius: 100
  },
  infosContatoContainer: {
    width: '70%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infosContato: {
    height: '40%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomeContato: {
    fontSize: 20,
    padding: 10,
    fontWeight: '500'
  },
  horarioContato: {
    fontSize: 15,
    padding: 10
  },
  mensagemContatoContainer: {
    height: '60%',
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start'
  }
});
