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
  searchBarContainer: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  searchBar: {
    fontSize: 22,
    padding: 5,
    paddingLeft: 10,
  },
  searchBarDiv: {
    flex: 3,
    justifyContent: "flex-start",
  },
  searchIconDiv: {
    flex: 0.4,
    justifyContent: "flex-end",
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
  vagasContainer: {
    flex: 1,
    alignItems: 'center',
    width: 320,
  },
  cardCultura: {
    width: 'fit-content',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5
  },
  imgVagaContainer: {
    width: 120,
    height: 120,
    alignItems: 'left',
    justifyContent: 'center'
  },
  imgVaga: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  infosVaga: {
    width: 200,
    height: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textVaga: {
    fontSize: 18,
    textAlign: 'center'
  },
  btnVaga: {
    backgroundColor: '#414d86',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  textBtnVaga: {
    color: 'white',
    fontSize: 16
  }
});
