import React, { useEffect, useState } from 'react';
import styles from '../styles/Home';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/FontAwesome';
import { Navbar } from '../components/Navbar';
import PagerView from 'react-native-pager-view';
import { formatarTempoDecorrido } from '../functions/formatarTempo';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '../constraints';

const Home = () => {
  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(1);

  const [destaques, setDestaques] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/post/destaques`)
      .then(res => {
        const destaquesComImagemCompleta = res.data.map(destaque => ({
          ...destaque,
          imagem: `${API_URL}${destaque.imagem}`,
        }));
        setDestaques(destaquesComImagemCompleta);
      })
      .catch(error => {
        console.error("Erro ao buscar destaques:", error);
      });
  }, []);
  
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
              />
            </View>
            
            <View style={styles.searchIconDiv}>
              <Icon name='search' size={30} />
            </View>
          </View>

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

            <TouchableOpacity style={[styles.cardCategoria, {marginLeft: 0} ]} onPress={() => navigation.navigate('Vagas')}>
              <Image
                style={styles.cardCategoriaImage}
                source={require('../../assets/images/emprego-card-image.png')}
              />
              <Text style={styles.textCategoria}>Emprego</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardCategoria}>
              <Image
                style={styles.cardCategoriaImage}
                source={require('../../assets/images/educacao-card-image.png')}
              />
              <Text style={styles.textCategoria}
              >Educação</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.cardCategoria, {marginRight: 0} ]} onPress={() => navigation.navigate('Culturas')}>
              <Image
                style={styles.cardCategoriaImage}
                source={require('../../assets/images/cultura-card-image.png')}
              />
              <Text style={styles.textCategoria}>Cultura</Text>
            </TouchableOpacity>

          </View>

          <View style={styles.oportunidadesContainer}>

            {destaques.map((destaque, i) => (
              <TouchableOpacity style={styles.oportunidadeCard} key={i}>
                <Image
                  style={styles.imagemOportunidade}
                  source={{ uri: destaque.imagem }}

                />
                <Text style={styles.tituloOportunidade}>{destaque.nome}</Text>
                <Text style={styles.textoTempoOportunidade}>{formatarTempoDecorrido(destaque.data)}</Text>

              </TouchableOpacity>
            ))}
         
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
