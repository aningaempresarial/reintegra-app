import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 2,
    color: '#112257',
    textAlign: 'left',
    width: '90%' 
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
  bannerContainer: {
    flex: 1,
    width: '100%',
    height: 180,
    marginTop: 20,
  },
  page: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 180,
    padding: 20,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  topCard: {
    width: '100%',
    flexDirection: 'row',
    height: 50,
    zIndex: 1
  },
  bottomCard: {
    width: '100%',
    position: 'absolute',
    height: 100,
    bottom: 50,
    zIndex: 0,
  },
  buttonCard: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
  },
  textButtonCard: {
    fontWeight: '400',
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  textCard: {
    fontWeight: '800',
    fontSize: 18,
    letterSpacing: 1,
    color: '#fff',
    flex: 1,
  },
  menuIndicator: {
    marginTop: 15,
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-evenly',
  },
  cardCategoriasContainer: {
    flexDirection: 'row',
    height: 150,
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 10
  },
  cardCategoria: {
    backgroundColor: '#fff',
    height: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 8
  },
  textCategoria: {
    fontSize: 16,
    width: '100%',
    fontWeight: '400',
    letterSpacing: 2,
    color: '#112257',
    textAlign: 'center',
  },
  cardCategoriaImage: {
    resizeMode: 'cover',
    width: 90,
    height: 90,
    borderRadius: 90
  },
  oportunidadesContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  oportunidadeCard: {
    minHeight: 150,
    width: '48%',
    backgroundColor: '#fff',
    marginBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10
  },
  imagemOportunidade: {
    resizeMode: 'cover',
    marginTop: '5%',
    width: '90%',
    height: 130,
    borderRadius: 10
  },
  tituloOportunidade: {
    width: '90%',
    textAlign: 'left',
    fontWeight: '700',
    letterSpacing: 0.7,
    fontSize: 14,
    color: '#222222',
  },
  textoTempoOportunidade: {
    width: '90%',
    textAlign: 'left',
    fontWeight: '400',
    letterSpacing: 0.7,
    fontSize: 14,
    color: '#222222',
    marginBottom: 10
  }
});
