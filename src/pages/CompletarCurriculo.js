import React, { useState } from 'react';
import styles from '../styles/CompletarCurriculo';
import Input from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const CompletarCurriculo = () => {
    const [modalInfo, setModalInfo] = useState(true);
    const [selectedGrauEscolaridade, setSelectedGrauEscolaridade] = useState('');
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
                                style={{ width: '55%' }} 
                            />

                            <Input
                                label={'Estado'}
                                placeholder={'SP'}
                                style={{ width: '25%' }}
                            />
                        </View>
                        
                       <SelectInput
                            label="Grau escolaridade"
                            placeholder={'Selecione seu grau de escolaridade...'}
                            selectedValue={selectedGrauEscolaridade}   // O valor selecionado atual
                            onValueChange={(value) => setSelectedGrauEscolaridade(value)}  // Função para atualizar o valor
                            options={[
                                { label: 'Fundamental 1 incompleto ( 1° ao 5° ano)', value: 'Fund 1 (1 á 5' },
                                { label: 'Fundamental 1 completo ( 1° ao 5° ano)', value: 'Fund 1 (1 á 5' },
                                { label: 'Fundamental 2 incompleto ( 6° ao 9° ano)', value: 'Fund 1 (6 á 9' },
                                { label: 'Fundamental 2 incompleto ( 6° ao 9° ano)', value: 'Fund 1 (6 á 9' },
                                { label: 'Ensino médio incompleto', value: 'Ensino médio incompleto' },
                                { label: 'Ensino médio completo', value: 'Ensino médio completo' },
                                { label: 'Ensino superior incompleto', value: 'Ensino superior incompleto' },
                                { label: 'Ensino superior completo', value: 'Ensino superior completo' },

                            ]}
                        /> 

                        

                       <Pressable style={styles.adicionarInformacoes} onPress={() => { }}>
                            <Icon name='add-circle' color='#112257' size={40} />
                            <Text style={[styles.textInformacoes, {fontSize: 12, color: '#000'}]}>Adicionar Informações Adicionais</Text>
                        </Pressable> 
                               
                        <View style={[styles.botoes, {marginTop: 10}]}>
                            <Pressable style={styles.button1} onPress={() => { navigation.replace('CompletarCurriculoParteDois') }}>
                                <Text style={styles.buttonText}>Continuar</Text>
                            </Pressable>
                        </View>  

                        <Pressable style={styles.precisaDeAjuda} onPress={() => { }}>
                            
                            <Text style={[styles.ajudaText, {fontSize: 8, color: '#000'}]}>Precisa de ajuda?</Text>
                            <Icon name='help-circle' color='#112257' size={25} />
                        </Pressable> 
                
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
