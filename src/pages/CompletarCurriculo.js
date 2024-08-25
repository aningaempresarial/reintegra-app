import React, { useState } from 'react';
import styles from '../styles/CompletarCurriculo';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const CompletarCurriculo = () => {
    const [modalInfo, setModalInfo] = useState(true)
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
        
                    <Text style={styles.title}>Completar Currículo</Text>
                    <Text style={styles.subtitle}>Selecione uma opção:</Text>
        
                </View>
        
                <View style={styles.main}>
        
        
                    <View style={[styles.card, { backgroundColor: '#ef4232' }]}>
                        <Text style={styles.textCard}>Dados Pessoais</Text>
                        <Pressable style={{ flex: 0.5 }}>
                            <Icon name='person' color='#fff' size={80} />
                        </Pressable>
                    </View>
        
                    <View style={[styles.cardContainer]}>
        
        
                        <View style={[{ flex: 1 }]}>
        
                            <Pressable style={[styles.cardN, { backgroundColor: '#112257' }]}>
                                <Icon name='home' color='#fff' size={80} />
                                <Text style={[styles.textCard, {fontSize: 15, flexBasis: '100%', paddingVertical: 10}]}>Dados Residênciais</Text>
                            </Pressable>
        
        
                            <Pressable style={[styles.cardN, { backgroundColor: '#297996', flex: 1, paddingTop: 30 }]}>
                                <Icon name='briefcase' color='#fff' size={80} />
                                <Text style={[styles.textCard, {fontSize: 15, flexBasis: '100%'}]}>Experiência Profissional</Text>
                            </Pressable>
        
                        </View>
        
                        <View style={[{ width: 10 }]}></View>
        
                        <View style={[{ flex: 1 }]}>
        
                            <Pressable style={[styles.cardN, { backgroundColor: '#1e8674', paddingVertical: 30 }]}>
                                <Icon name='school-sharp' color='#fff' size={80} />
                                <Text style={[styles.textCard, {fontSize: 15, flexBasis: '100%'}]}>Formação Acadêmica</Text>
                            </Pressable>
        
        
                            <Pressable style={[styles.cardN, { backgroundColor: '#f5f8ff', borderStyle: 'dashed', borderWidth: 2, paddingVertical: 20 }]}>
                                <Icon name='add-circle' color='#ef4232' size={80} />
                                <Text style={[styles.textCard, {fontSize: 15, flexBasis: '100%', color: '#000'}]}>Adicionar Outras Informações</Text>
                            </Pressable>
        
        
                        </View>
        
                    </View>
        
        
                </View>
            </ScrollView>

            <Modal
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

            </Modal>

        </SafeAreaView>
    );
};


export default CompletarCurriculo;
