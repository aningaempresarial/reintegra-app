import React, { useState } from 'react';
import styles from '../styles/PerfilEmpresa';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';


const PerfilEmpresa = () => {
    const [modalInfo, setModalInfo] = useState(true);
    const [selectedGrauEscolaridade, setSelectedGrauEscolaridade] = useState('');
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', backgroundColor: '#f5f8ff' }}>
              
                <View style={styles.header}>
                    <Image style={styles.fundoazul}
                    source={require('../../assets/images/fundoAzul.jpg')}
                    />
                    <Image style={styles.empresa}
                    source={require('../../assets/images/iconeEmpresa.jpg')}
                    />
                </View>
                <Text style={styles.nome}>
                    Indústria de Gelo Idemar
                </Text>
                <Text style={styles.local}>
                    AM, Amazonas
                </Text>
                <Text style={styles.descricao}>
                    A Indústria de Gelo Idemar é uma empresa especializada na produção e distribuição de gelo de alta qualidade, atendendo às necessidades de clientes em diversos setores.
                </Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={styles.text1}>Publicações</Text>
                    <Text style={styles.text2}>Ver Mais</Text>
                </View>

                <View style={styles.vagas}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image  style={{ width: 80, height: 80, borderRadius: 5 }}
                        source={require('../../assets/images/assistente.png')} 
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18} }>Vaga de Assistente</Text>
                            <Text style={{  marginTop: 10, fontSize: 10 }}>Há 1 minuto</Text>
                        </View>
                    </View>
                    <View style={styles.cantinho}>
                        <Icon name="ellipsis-horizontal" size={20} color="gray" />
                        <Icon name="checkmark-circle" size={20} color="green" />
                    </View>
                </View>
                <View style={styles.vagas}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image  style={{ width: 80, height: 80, borderRadius: 5 }}
                        source={require('../../assets/images/secretaria.jpg')} 
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Vaga de Secretária</Text>
                            <Text style={{  marginTop: 10, fontSize: 10}}>Há 1 minuto</Text>
                        </View>
                    </View>
                    <View style={styles.cantinho}>
                        <Icon name="ellipsis-horizontal" size={20} color="gray" /> 
                        <Icon name="checkmark-circle" size={20} color="green"  />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <Text style={styles.text3}>Encontre "Industria de Gelo": </Text>
                    <Text style={styles.text4}>Editar informações</Text>
                </View>
                <View style={styles.containers}>
                <Image style={styles.imagemmapa}
                    source={require('../../assets/images/exemplomapa.png')}
                    />
                </View>

            </ScrollView>
           
           
            

        </SafeAreaView>

        
    );
};

     

export default PerfilEmpresa;
