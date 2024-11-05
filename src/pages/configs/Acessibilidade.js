import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import { View, Text, Switch,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { getItem, setItem } from '../../functions/AsyncStorage';


const Acessibilidade = () => {

    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                    <Text style={styles.title}>Acessibilidade</Text>
                    <Text style={styles.options}> Tamanho do texto</Text>
                    
                </View>

                <Slider
                    style={{width: '100%', height: 100}}
                    value={fontSize}
                    minimumValue={18}
                    maximumValue={40}
                    step={8}
                    minimumTrackTintColor="grey"
                    maximumTrackTintColor="#767577"
                    thumbTintColor="#ff5733"
                    onValueChange={async (e) => {
                        setFontSize(e)
                        await setItem('fontSize', e);
                    }}
                />
                
                <Text style={styles.textoCorrido}>Ajuste o tamanho do texto para garantir uma leitura confortável e sem esforço.</Text>
            </ScrollView>

        </SafeAreaView>
    );
};


export default Acessibilidade;
