import React, { useState } from 'react';
import styles from '../styles/Configuracoes';
import { View, Text, StyleSheet,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const Configuracoes = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                    <Text style={styles.title}>Configurações</Text>
                    <Text style={styles.subtitle}>Conta e Exibição</Text>
                </View>
                <View style={styles.content}>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('EditarPerfil')}>
                        <Icon name='person' size={20} />
                        <Text style={styles.options}>Editar perfil</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('Notificacoes')}>
                        <Icon name='notifications-outline' size={20} />
                        <Text style={styles.options}>Notificações</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('Acessibilidade')}>
                        <Icon name='accessibility-outline' size={15} style={{left:3}}/>
                        <Icon name='ellipse-outline' size={25} style={{positon: 'absolute', right: 17}}></Icon>

                        <Text style={[styles.options, {right: 20}]}>Acessibilidade</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('SegurancaPermissoes')}>
                        <Icon name='shield-checkmark-outline' size={20} />
                        <Text style={styles.options}>Segurança e permissões</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('CompartilharPerfil')}>
                        <Icon name='arrow-redo' size={20} />
                        <Text style={styles.options}>Compartilhar perfil</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                </View>
                <View style={styles.header}>
                    
                    <Text style={styles.subtitle}>Suporte e Sobre</Text>
                </View>
                <View style={styles.content}>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('Sobre')}>
                        <Icon name='information-circle-outline' size={20} />
                        <Text style={styles.options}>Sobre</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('AjudaSuporte')}>
                        <Icon name='person' size={20} />
                        <Text style={styles.options}>Ajuda e suporte</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('RelatarProblema')}>
                        <Icon name='flag' size={20} />
                        <Text style={styles.options}>Relatar um problema</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icones} onPress={() => navigation.navigate('TermosPoliticas')}>
                        <Icon name='document-text-outline' size={20} />
                        <Text style={styles.options}>Termos e políticas</Text>
                        <Icon name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default Configuracoes;
