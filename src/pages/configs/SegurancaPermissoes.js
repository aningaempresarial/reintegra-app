import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, Switch,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const SegurancaPermissoes = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
   
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                    <Icon name='phone-portrait-outline' size={65}></Icon>            
                    <Icon name='lock-closed-outline' size={30} style={{positon: 'absolute', bottom: 50}}></Icon>
                    <Text style={styles.title}>Segurança</Text>
                    <Text style={styles.subsubtitle}>Vizualize e gerencie as configurações para manter sua conta mais segura</Text>
                </View>
                <View style={styles.greyLine} />
                <View style={styles.buttonOptions}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Alerta de segurança</Text>
                       <Switch
                        trackColor={{ false: "#767577", true: "grey" }}
                        thumbColor={isEnabled ? "#ff5733" : "#f4f3f4"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    /> 
                </View>
                <View style={{marginTop: 30}}>
                <Text style={{ fontSize: 21, fontWeight: 'bold', textAlign: 'center'}}>Seus Dispositivos</Text>

                </View>
                <View style={styles.greyLine} />
                <Text>Lista de dispositivos</Text>
                <View style={styles.greyLine} />

                <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Permitir que entrem no meu perfil</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled2 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Permitir que mandem mensagens</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled3 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                        />
                    </View>
                    

                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Me atualize de eventos/vagas/cursos</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled4 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch4}
                            value={isEnabled4}
                        />
                    </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default SegurancaPermissoes;
