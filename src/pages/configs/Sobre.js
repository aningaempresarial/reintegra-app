import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../../functions/AsyncStorage';

const Sobre = () => {
    const navigation = useNavigation();


    const [fontSize, setFontSize] = useState(null);

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
    }, []);


    const styles = createStyle(fontSize);

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                    <Text style={styles.title}>Sobre</Text>
                    <Text style={styles.subtitle}>Conta e Exibição</Text>
                </View>
                <View style={styles.content}>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Editar perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Notificações</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Acessibilidade</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Segurança e permissões</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Compartilhar perfil</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.header}>
                    
                    <Text style={styles.subtitle}>Suporte e Sobre</Text>
                </View>
                <View style={styles.content}>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Sobre</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Ajuda e suporte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Relatar um problema</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Vagas')}>
                        <Text style={styles.options}>Termos e políticas</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default Sobre;
