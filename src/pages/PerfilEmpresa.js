import React, { useEffect, useState } from 'react';
import createStyle from '../styles/PerfilEmpresa';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { API_URL } from '../constraints';
import { getItem, setItem } from '../functions/AsyncStorage';
import { formatarTempoDecorrido } from '../functions/formatarTempo';
import MapView, { Marker } from 'react-native-maps';


const PerfilEmpresa = ({ route }) => {

    

    const navigation = useNavigation();
    const [empresa, setEmpresa] = useState({
        nomeEmpresa: null,
        emailEmpresaContato: null,
        cnpjEmpresa: null,
        usuario: null,
        emailUsuario: null,
        fotoPerfil: null,
        bannerPerfil: null,
        descricaoPerfil: null,
        nomeAreaAtuacao: null,
        telefones: [],
        enderecos: [
            {
                logradouroEnderecoEmpresa: null,
                numEnderecoEmpresa: null,
                complementoEnderecoEmpresa: null,
                cepEnderecoEmpresa: null,
                bairroEnderecoEmpresa: null,
                cidadeEnderecoEmpresa: null,
                estadoEnderecoEmpresa: null,
                latitudeEnderecoEmpresa: -24.0781000544,
                longitudeEnderecoEmpresa: -47.2142537306
            }
        ]
    })

    const [posts, setPosts] = useState([
        {
            idPostagem: null,
            tituloPostagem: null,
            conteudoPostagem: null,
            imagemPostagem: null,
            dtPostagem: null
        }
    ])

    const [initialRegion, setInitialRegion] = useState({
        latitude: empresa.enderecos[0].latitudeEnderecoEmpresa || -24.0781000544,
        longitude: empresa.enderecos[0].longitudeEnderecoEmpresa || -47.2142537306,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });

    const { usuario } = route.params;

    const [fontSize, setFontSize] = useState(null);

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
    console.log(fontSize)
    const styles = createStyle(fontSize);


    useEffect(() => {
        
        axios.get(`${API_URL}/empresa/${usuario}`)
        .then(res => {
            setEmpresa(res.data)

            if (res.data.enderecos && res.data.enderecos.length > 0) {
                const firstAddress = res.data.enderecos[0];
                setInitialRegion({
                    latitude: firstAddress.latitudeEnderecoEmpresa,
                    longitude: firstAddress.longitudeEnderecoEmpresa,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                });
            }
        })
        .catch(err => {
            console.error(err);
        })

        axios.get(`${API_URL}/post/all/${usuario}`)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    const [timestamp, setTimestamp] = useState(new Date().getTime());

    async function getLastUpdate() {
        const lastupdate = await getItem('lastupdate');
        setTimestamp(lastupdate);
    }
  
    useEffect(() => {
        getLastUpdate();
    }, [])
    

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', backgroundColor: '#f5f8ff' }} contentContainerStyle={{ alignItems: 'center' }}>
              
                <View style={styles.header}>
                    <Image style={styles.fundoazul}
                    source={{ uri: `${API_URL}${empresa.bannerPerfil}?t=${timestamp}` }}
                    resizeMode='cover'
                    />
                    <Image style={styles.empresa}
                    source={{ uri: `${API_URL}${empresa.fotoPerfil}?t=${timestamp}` }}
                    />
                </View>

                <View style={{ width: '90%' }}>
                    <Text style={styles.nome}>{ empresa.nomeEmpresa }</Text>
                    <Text style={styles.local}>
                        { empresa.enderecos[0].cidadeEnderecoEmpresa } - { empresa.enderecos[0].bairroEnderecoEmpresa }
                    </Text>
                    <Text style={styles.descricao}>
                        { empresa.descricaoPerfil }
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={styles.text1}>Publicações</Text>
                        <Text style={styles.text2}>Ver Mais</Text>
                    </View>

                    {posts.slice(0, 2).map((post, i) => (
                        <View style={styles.vagas} key={i}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image  style={{ width: 80, height: 80, borderRadius: 5 }}
                                source={{ uri: `${API_URL}${post.imagemPostagem}` }}
                                resizeMode='cover'
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.title}>{ post.tituloPostagem }</Text>
                                    <Text style={styles.text4}>{ formatarTempoDecorrido(post.dtPostagem) }</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                    
               
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                        <Text style={styles.text1}>Encontre { empresa.nomeEmpresa }: </Text>
                    </View>

                    <View style={styles.containers}>
                        <MapView
                            style={styles.map} 
                            region={initialRegion}
                        >
                            {empresa.enderecos.map((endereco, index) => (
                                <Marker
                                    key={index}
                                    coordinate={{
                                        latitude: endereco.latitudeEnderecoEmpresa,
                                        longitude: endereco.longitudeEnderecoEmpresa
                                    }}
                                    title={empresa.nomeEmpresa}
                                    description={`${endereco.logradouroEnderecoEmpresa}, ${endereco.numEnderecoEmpresa}`}
                                >
                                    <View style={styles.customMarker}>

                                        <View style={styles.markerBackground} />
                                        
                                        <Image 
                                        source={{ uri: `${API_URL}${empresa.fotoPerfil}` }} 
                                        style={styles.markerLogo} 
                                        />


                                    </View>
                                </Marker>
                            ))}
                        </MapView>
                    </View>
                </View>

            </ScrollView>
           
           
            

        </SafeAreaView>

        
    );
};

     

export default PerfilEmpresa;
