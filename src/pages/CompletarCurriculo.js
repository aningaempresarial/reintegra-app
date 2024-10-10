import React, { useState } from 'react';
import styles from '../styles/CompletarCurriculo';
import Input from "../components/TextInput";
// import SelectInput from "../components/SelectInput";
import { View, Text, StyleSheet, Image, SelectInput, ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
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
                    <Text style={styles.subtitle}>Preencha os campos abaixo:</Text>
        
                </View>
        
                <View style={styles.main}>
        
        
                    <View style={styles.inputContainer}>
                        <Input
                            label={'Telefone'}
                            placeholder={'11 2666-3621'}
                            style={{ width: '90%' }}
                            
                        />

                        <Input
                            label={'CEP'}
                            placeholder={'14015-048'}
                            style={{ width: '90%' }}
                            
                        />
                        <View style={styles.inputCidadeEstado}>
                            <Input
                                label={'Cidade'}
                                placeholder={'São Paulo'}
                                style={{ width: '50%' }}
                                
                            />

                            <Input
                                label={'Estado'}
                                placeholder={'SP'}
                                style={{ width: '30%' }}
                                
                            />
                            {/* <SelectInput
                                label="Grau escolaridade"
                                placeholder={'Selecione seu grau de escolaridade...'}
                            /> */}
                        </View>
                        
                        
                        {/* <View style={[styles.botoes, {marginTop: 20}]}>
                            <Pressable style={styles.button2} onPress={() => { navigation.replace('Start') }}>
                                <Text style={styles.buttonText2}>Cancelar</Text>
                            </Pressable>
                            
                            <Pressable style={styles.button1} onPress={() => { navigation.replace('Start') }}>
                                <Text style={styles.buttonText}>Continuar</Text>
                            </Pressable>
                        </View> */} 
                
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
