import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import Input from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Switch, Pressable } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../../functions/AsyncStorage';
import axios from 'axios';
import { API_URL } from '../../constraints';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const EditarPerfil = () => {

    const [selectedGenero, setSelectedGenero] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [fontSize, setFontSize] = useState(null);

    const [usuario, setUsuario] = useState({
        nomeExDetento: '',
        cpfExDetento: '12345678900',
        sexoExDetento: null,
        dataNascExDetento: null,
        logradouroExDetento: null,
        numExDetento: null,
        cepExDetento: null,
        bairroExDetento: null,
        cidadeExDetento: null,
        estadoExDetento: null,
        outrasInformacoesCurriculo: null,
        usuario: null,
        emailUsuario: null,
        fotoPerfil: null,
        bannerPerfil: null
    });

    function formataCPF(cpf){
        cpf = cpf.replace(/[^\d]/g, "");
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
      }
      

    const [photoURI, setPhotoURI] = useState(null);

    const formatarData = (dataISO) => {
        const data = new Date(dataISO);
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
    };

    const pickImage = async () => {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (!permissionResult.granted) {
            alert("Permissão para acessar a galeria é necessária!");
            return;
        }
        
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        
        if (!result.canceled) {
            console.log(result.assets[0].uri);
            setPhotoURI(result.assets[0].uri);


            const formData = new FormData();

            formData.append('foto', {
                uri: result.assets[0].uri,
                name: 'foto.jpg',
                type: 'image/jpeg',
            });
            
            console.log(`${API_URL}/perfil/usuario/${usuario.usuario}`);
            
            axios.put(`${API_URL}/perfil/usuario/${usuario.usuario}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then(res => {
                console.log("Resposta do servidor:", res.data);
            })
            .catch(err => {
                console.error("Erro:", err);
            });
        }
    };

    const [timestamp, setTimestamp] = useState(new Date().getTime());

    async function getLastUpdate() {
        const lastupdate = await getItem('lastupdate');
        setTimestamp(lastupdate);
    }

    useEffect(() => {
        getLastUpdate();
    }, [])

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


        async function fetchUserData() {

            const token = await getItem('token');

            const formData = new FormData();
            formData.append('token', token);

            axios.post(`${API_URL}/exDetento/info`, formData, { headers: { 'Content-Type': 'multipart/form-data' }})
            .then(res => {
                setPhotoURI(`${API_URL}${res.data.fotoPerfil}?t=${timestamp}`)
                setUsuario(res.data);
            })
            .catch(e => {
                console.error(e)
            })

        }

        fetchUserData();
    }, []);


    const styles = createStyle(fontSize);

    const navigation = useNavigation();

  

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.imgEditContainer}>
                    <Image style={styles.imgEdit} source={{ uri: photoURI }} />
                    <Pressable style={{ backgroundColor: 'black', width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', position: 'absolute', right: 80, bottom: 0 }} onPress={pickImage}>
                        <Icon name={"camera-outline"} style={{ color: 'white' }} size={30} />
                    </Pressable>
                </View>
                <View >
                    <Text style={styles.title}>{usuario.nomeExDetento.split(' ')[0]} {usuario.nomeExDetento.split(' ')[usuario.nomeExDetento.split(' ').length-1]}</Text>

                    <View style={styles.line} />
                    <View style={{margin: 15}}>
                        <Text style={{fontSize: fontSize-3, fontWeight: 'bold', marginTop: 15}}>Dados Pessoais</Text>
                        
                        <Input
                            label={'Nome Completo'}
                            value={usuario.nomeExDetento}
                            style={{ width: '90%' }}   
                            editable={false}
                        />
                        <Input
                            label={'CPF'}
                            value={formataCPF(usuario.cpfExDetento)}
                            style={{ width: '90%' }}   
                            editable={false}
                        />
                        <Input
                            label={'Data de Nascimento'}
                            value={formatarData(usuario.dataNascExDetento)}
                            style={{ width: '90%' }}
                            editable={false}
                        />
                        <Input
                            label={'Sexo'}
                            value={usuario.sexoExDetento}
                            style={{ width: '90%' }}
                            editable={false}
                        />

                        
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default EditarPerfil;
