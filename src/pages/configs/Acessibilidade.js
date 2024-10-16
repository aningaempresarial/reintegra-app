import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, Switch,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';


const Acessibilidade = () => {

    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                    <Text style={styles.title}>Acessibilidade</Text>
                    <Text style={styles.options}> Tamanho do texto</Text>
                    
                </View>
                <View style={styles.buttonOptions}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Zoom</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "grey" }}
                        thumbColor={isEnabled ? "#ff5733" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />    
                </View>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Nível máximo do zoom</Text>
                </View>
               <View>
                <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Idioma</Text>
               </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default Acessibilidade;
