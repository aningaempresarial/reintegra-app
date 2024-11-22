import React, { useEffect, useState } from 'react';
import createStyle from '../styles/Home';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image, Modal, Dimensions, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/FontAwesome';
import { Navbar } from '../components/Navbar';
import PagerView from 'react-native-pager-view';
import { formatarTempoDecorrido } from '../functions/formatarTempo';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '../constraints';
import { getItem, removeItem, setItem } from '../functions/AsyncStorage';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Zoom from 'react-native-zoom-reanimated'

// periodo de atualizações das imagens (atualiza o timestaps que é um parametro passado para enganar o ReactNative)
const PERIODO_ATUALIZACAO = 20 * 60 * 1000;

const Home = ({ route }) => {


  const { nomeEmpresa } = route.params || {};

  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(1);
  const [destaques, setDestaques] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [modalZoomImage, setModalZoomImage] = useState(false);
  const [uriImageModal, setUriImageModal] = useState('');

  const [searchText, setSearchText] = useState("");




  const screenWidth = Dimensions.get('window').width;

  function openImage(uri) {
    setModalZoomImage(true);
    setUriImageModal(uri);
  }

  useEffect(() => {
    if (typeof(nomeEmpresa) != 'undefined') {
      setSearchText(nomeEmpresa)
    }

    axios.get(`${API_URL}/post/all`)
      .then(res => {
        const destaquesComImagemCompleta = res.data.map(destaque => ({
          ...destaque,
          fotoPerfil: `${API_URL}${destaque.fotoPerfil}`,
          imagem: `${API_URL}${destaque.imagemPostagem}`,
        }));
        console.log(res.data)
        setDestaques(destaquesComImagemCompleta);
        setFilteredPosts(destaquesComImagemCompleta);
      })
      .catch(error => {
        console.error("Erro ao buscar destaques:", error);
      });
  }, []);

  const [fontSize, setFontSize] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterPostsByCategory = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(item => item !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  useEffect(() => {
    if (selectedCategories.length > 0) {
      const filtered = destaques.filter(post => selectedCategories.includes(post.categoriaPostagem));
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(destaques);
    }
  }, [selectedCategories, destaques]);

  useEffect(() => {
    
    async function fetchFontSize() {
      const size = await getItem('fontSize');
      if (!size) {
        await setItem('fontSize', 18);
        setFontSize(18);
      } else {
        setFontSize(size);
      }
    }
    fetchFontSize();
  }, []);

  const styles = createStyle(fontSize);

  const [timestamp, setTimestamp] = useState(new Date().getTime());

  async function checkTimeToUpdate() {
    const lastupdate = await getItem('lastupdate');
    const now = new Date().getTime();

    if (!lastupdate || (now - parseInt(lastupdate) > PERIODO_ATUALIZACAO)) {
      setTimestamp(now)
      await setItem('lastupdate', now)
      console.log('update')
    } else {
      console.log('sem update')
      setTimestamp(lastupdate)
    }
  }

  useEffect(() => {
    checkTimeToUpdate();
  }, [])


  const filteredPosts2 = filteredPosts.filter(
    (emprego) =>
      emprego.nomeEmpresa.toLowerCase().includes(searchText.toLowerCase()) ||
      emprego.tituloPostagem.toLowerCase().includes(searchText.toLowerCase())
  );
  
  
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView style={{ width: '100%', backgroundColor: '#f5f8ff' }}>
        <View style={styles.main}>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBarDiv}>
              <TextInput
                  style={styles.searchBar}
                  placeholder="Buscar..."
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
              />
            </View>
            
            <View style={styles.searchIconDiv}>
              <Icon name='search' size={30} />
            </View>
          </View>

          {typeof(nomeEmpresa) == 'undefined' && (
            <>
              <PagerView
                style={styles.bannerContainer}
                initialPage={1}
                onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
              >
                <View style={styles.page} key={1}>
                  <View style={[styles.card, { backgroundColor: '#297996' }]}>
                    <View style={styles.topCard}>
                      <Text style={styles.textCard}>Novas ações sociais!</Text>
                      <TouchableOpacity style={styles.buttonCard}>
                        <Text style={styles.textButtonCard}>Ver Mais</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.bottomCard}>
                      <Image
                        style={{ width: '100%', resizeMode: 'contain' }}
                        source={require('../../assets/images/card-diversidade-image.png')}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.page} key={2}>
                  <View style={[styles.card, { backgroundColor: '#ff914d' }]}>
                    <View style={styles.topCard}>
                      <Text style={styles.textCard}>Novas vagas publicadas!</Text>
                      <TouchableOpacity style={styles.buttonCard} onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.textButtonCard}>Ver Mais</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.bottomCard}>
                      <Image
                        style={{ width: '100%', resizeMode: 'contain' }}
                        source={require('../../assets/images/card-vagas-image.png')}
                      />
                    </View>
                  </View>
                </View>

                <View style={styles.page} key={3}>
                  <View style={[styles.card, { backgroundColor: '#1e8674' }]}>
                    <View style={styles.topCard}>
                      <Text style={styles.textCard}>Novos eventos publicados!</Text>
                      <TouchableOpacity style={styles.buttonCard}>
                        <Text style={styles.textButtonCard}>Ver Mais</Text>
                      </TouchableOpacity>
                    </View>

                    <View style={styles.bottomCard}>
                      <Image
                        style={{ width: '100%', resizeMode: 'contain' }}
                        source={require('../../assets/images/card-social-image.png')}
                      />
                    </View>
                  </View>
                </View>

              </PagerView>

              <View style={styles.menuIndicator}>
                <IconA
                  name={currentPage === 0 ? 'circle' : 'circle'}
                  size={18}
                  color={currentPage === 0 ? '#112257' : '#dddddd'}
                />
                <IconA
                  name={currentPage === 1 ? 'circle' : 'circle'}
                  size={18}
                  color={currentPage === 1 ? '#112257' : '#dddddd'}
                />
                <IconA
                  name={currentPage === 2 ? 'circle' : 'circle'}
                  size={18}
                  color={currentPage === 2 ? '#112257' : '#dddddd'}
                />
              </View>

              <Text style={styles.subtitle}>Categorias</Text>
              <View style={styles.cardCategoriasContainer}>
                <TouchableOpacity
                  style={[
                    styles.cardCategoria, 
                    { 
                      marginLeft: 0, 
                      borderWidth: selectedCategories.length > 0 && selectedCategories.includes('emprego') ? 1 : 1,
                      borderColor: selectedCategories.includes('emprego') ? '#414d86' : 'transparent',
                      opacity: selectedCategories.length === 0 || selectedCategories.includes('emprego') ? 1 : 0.4
                    }
                  ]}
                  onPress={() => filterPostsByCategory('emprego')}
                >
                  <Image
                    style={styles.cardCategoriaImage}
                    source={require('../../assets/images/emprego-card-image.png')}
                  />
                  <Text style={styles.textCategoria}>
                    Emprego
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.cardCategoria, 
                    { 
                      borderWidth: selectedCategories.length > 0 && selectedCategories.includes('informativo') ? 1 : 1,
                      borderColor: selectedCategories.includes('informativo') ? '#414d86' : 'transparent',
                      opacity: selectedCategories.length === 0 || selectedCategories.includes('informativo') ? 1 : 0.4
                    }
                  ]}
                  onPress={() => filterPostsByCategory('informativo')}
                >
                  <Image
                    style={styles.cardCategoriaImage}
                    source={require('../../assets/images/educacao-card-image.png')}
                  />
                  <Text style={styles.textCategoria}>
                    Informação
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.cardCategoria, 
                    { 
                      marginRight: 0, 
                      borderWidth: selectedCategories.length > 0 && selectedCategories.includes('divulgacao') ? 1 : 1,
                      borderColor: selectedCategories.includes('divulgacao') ? '#414d86' : 'transparent',
                      opacity: selectedCategories.length === 0 || selectedCategories.includes('divulgacao') ? 1 : 0.4 
                    }
                  ]}
                  onPress={() => filterPostsByCategory('divulgacao')}
                >
                  <Image
                    style={styles.cardCategoriaImage}
                    source={require('../../assets/images/cultura-card-image.png')}
                  />
                  <Text style={styles.textCategoria}>
                    Divulgação
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          

          <View style={styles.oportunidadesContainer}>

            {filteredPosts2.map((destaque, i) => (
              <View style={styles.oportunidadeCard} key={i}>


                <Pressable style={styles.divInfoUsuario} onPress={() => {
                  navigation.navigate('PerfilEmpresa', {
                    usuario: destaque.usuario
                  })
                }}>
                  <Image
                    style={styles.empresaFoto}
                    source={{ uri: destaque.fotoPerfil + `?t=${timestamp}` }}
                  />

                  <View style={styles.infoUsuario}>
                    <Text style={styles.nomeUsuario}>{ destaque.nomeEmpresa }</Text>
                    <Text style={styles.textoTempoOportunidade}>{formatarTempoDecorrido(destaque.dtPostagem)}</Text>
                  </View>
                </Pressable>

                <View style={{ width: '90%' }}>
                  <Text style={styles.tituloPost}>{ destaque.tituloPostagem }</Text>
                  <Text style={styles.corpoPost}>{ destaque.conteudoPostagem }</Text>
                </View>


                <TouchableOpacity style={styles.imagemOportunidade} onPress={() => openImage(destaque.imagem)}>
                  <Image
                      style={styles.imagemOportunidade}
                      source={{ uri: destaque.imagem }}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.saibaMais} onPress={() => navigation.navigate("Vaga", {
                  vagaId: destaque.idPostagem,
                  nomeVaga: destaque.tituloPostagem,
                  textoVaga: destaque.conteudoPostagem,
                  imagemVaga: `${API_URL}${destaque.imagemPostagem}`,
                  destaque: destaque
                  })}><Text style={styles.textoSaibaMais}>Saiba Mais</Text></TouchableOpacity>

              </View>
            ))}
         
          </View>


        </View>
      </ScrollView>

      <Modal
        visible={modalZoomImage}
        transparent={true}
        animationType='fade'
      >

        <View style={styles.modalZoomImage}>

          <TouchableOpacity style={{ zIndex: 2, margin: 20 }} onPress={() => setModalZoomImage(false)}>
            <Icon name='close-circle-outline' size={50} color="#FFF" style={{
              position: 'absolute',
              top: 0,
              right: 0
            }} />
          </TouchableOpacity>


          <View style={{ width: '100%', flex: 1 }}>
            <GestureHandlerRootView>
              <Zoom>
                <Image
                  source={{ uri: uriImageModal }}
                  resizeMode='contain'
                  style={{
                    width: screenWidth,
                    height: 330 * screenWidth / 600,
                   }}
                />
              </Zoom>
            </GestureHandlerRootView>
          </View>
          
        </View>

      </Modal>
    </SafeAreaView>
  );
};

export default Home;
