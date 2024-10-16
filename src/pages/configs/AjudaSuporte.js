import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const AjudaSuporte = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                
            </ScrollView>

        </SafeAreaView>
    );
};


export default AjudaSuporte;
