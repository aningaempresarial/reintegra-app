import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const CompartilharPerfil = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                    <Text style={styles.title}>Compartilhar Perfil</Text>
                    
                </View>
                <View style={styles.qrcode}>

                    <View style={styles.greyLine} />
                    <Text>Imagem do QRcode</Text>
                    <Text style={styles.options}> nome do usuário</Text>
                    <View style={styles.greyLine} />
                </View>

                <View style={styles.cardCompartilharContainer}>

                    <TouchableOpacity style={[styles.cardCompartilhar, {marginLeft: 0} ]}>
                    <Icon name="arrow-redo" size={50}/>

                        <Text style={styles.textCompartilhar}>Compartilhar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardCompartilhar}>
                    <Icon name="link-outline" size={50}/>
                        <Text style={styles.textCompartilhar}>Copiar Link</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.cardCompartilhar, {marginRight: 0} ]}>
                    <Icon name="download-outline" size={50}/>

                    <Text style={styles.textCompartilhar}>Baixar</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default CompartilharPerfil;
