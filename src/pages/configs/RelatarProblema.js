import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, StyleSheet, TextInput,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const RelatarProblema = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
            <View style={styles.header}>
                    <Text style={styles.title}>Central de Ajuda</Text>
                    <Text style={styles.title2}>Fale Conosco</Text>
                    
                </View>
                <View style={styles.inputDiv}>
                    <TextInput style={styles.input} placeholder="Digite uma mensagem" />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default RelatarProblema;
