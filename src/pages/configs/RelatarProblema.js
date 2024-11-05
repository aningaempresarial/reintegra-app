import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import { View, Text, StyleSheet, TextInput,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../../functions/AsyncStorage';

const RelatarProblema = () => {
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
                    <Text style={styles.title}>Central de Ajuda</Text>
                    <Text style={styles.title2}>Fale Conosco</Text>
                    
                </View>
                <View style={styles.inputDiv}>
                    <TextInput style={[styles.input, { fontSize }]} placeholder="Digite uma mensagem" />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default RelatarProblema;
