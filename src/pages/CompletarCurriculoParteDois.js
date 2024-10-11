import React, { useState } from 'react';
import styles from '../styles/CompletarCurriculo';
import Input from "../components/TextInput";
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const CompletarCurriculoParteDois = () => {
    const [modalInfo, setModalInfo] = useState(true);
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
        
                    <Text style={styles.title}>Completar Currículo</Text>
        
                </View>
        
                <View style={styles.main}>
        
        
                    <View style={styles.inputContainer}>
                        <Input
                            label={'Cargo: '}
                            placeholder={'Mecânico '}
                            style={{ width: '90%' }}
                            
                        />

                        <Input
                            label={'Nome Empresa:'}
                            placeholder={'Mecânica Raiz'}
                            style={{ width: '90%' }}
                            
                        />
                        
                        <Input
                            label={'Periodo:'}
                            placeholder={'02/2010 a 06/2022'}
                            style={{ width: '90%' }}
                            
                        />

                        <Pressable style={styles.adicionarInformacoes} onPress={() => { }}>
                            <Icon name='add-circle' color='#112257' size={40} />
                            <Text style={[styles.textInformacoes, {fontSize: 12, color: '#000'}]}>Adicionar Outra Experiência</Text>
                        </Pressable>
                        
                        {/* experiencias já cadastradas */}
                        <View style={[styles.experiencias, {marginTop: 20}]}>
                            <View style={[styles.experiencia1]}>
                                <Text style={styles.experienciasText}>Experiência 1</Text>
                            </View>
                        </View> 

                        <View style={[styles.botoes, {marginTop: 20}]}>
                            <Pressable style={styles.button1} onPress={() => { navigation.replace('CompletarCurriculo') }}>
                                <Text style={styles.buttonText}>Finalizar</Text>
                            </Pressable>
                        </View>  
                        
                        <Pressable style={styles.precisaDeAjuda} onPress={() => { }}>
                            
                            <Text style={[styles.ajudaText, {fontSize: 8, color: '#000'}]}>Precisa de ajuda?</Text>
                            <Icon name='help-circle' color='#112257' size={25} />
                        </Pressable> 
                    </View>
                
        
                </View>
            </ScrollView>

            {/* <Modal
                visible={modalInfo}
                transparent={true}
                
            >
                <View
                style={styles.modal}
                >

                <View style={styles.modalContent}>

                    <Text style={styles.text}>A sua conta está quase pronta! 🤩</Text>
                    <Text style={styles.text}></Text>

                    <Text style={styles.textJust}>Você pode completar os dados do seu perfil, incluindo <Text style={styles.boldText}>endereço</Text>, <Text style={styles.boldText}>telefone</Text>, <Text style={styles.boldText}>experiência profissional</Text>, entre outros. Se preferir, pode fazer isso mais tarde.</Text>
                    <Text style={styles.textJust}></Text>

                    <Text style={styles.textJust}>Seja bem vindo(a) ao Reintegra!</Text>
                    <Text style={styles.textJust}></Text>
                    

                    <View style={[styles.botoes, {width: '100%'}]}>
                        <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                            setModalInfo(false)
                            }} >
                            <Text style={styles.buttonSmallText}>Completar meu Currículo</Text>
                        </Pressable>
                    </View>

                    <View style={[styles.botoes, {width: '100%'}]}>
                        <Pressable style={[styles.button3, { flex: 1, backgroundColor: '#112257', borderColor: '#112257' }]} onPress={() => { 
                            setModalInfo(false)
                            navigation.replace('Home')
                            }} >
                            <Text style={styles.buttonSmallText}>Deixar isso para depois</Text>
                        </Pressable>
                    </View>
                </View>

                </View>

            </Modal> */}

        </SafeAreaView>
    );
};


export default CompletarCurriculoParteDois;
