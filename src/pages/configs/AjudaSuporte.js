import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../../functions/AsyncStorage';

const AjudaSuporte = () => {
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
        
                
            </ScrollView>

        </SafeAreaView>
    );
};


export default AjudaSuporte;
