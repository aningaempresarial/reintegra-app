import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, Switch, ScrollView, SafeAreaView } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const Notificacoes = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);
    const [isEnabled8, setIsEnabled8] = useState(false);
    const [isEnabled9, setIsEnabled9] = useState(false);

    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
    const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);
    const toggleSwitch8 = () => setIsEnabled8(previousState => !previousState);
    const toggleSwitch9 = () => setIsEnabled9(previousState => !previousState);



    const navigation = useNavigation();
    

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
                <View style={styles.header}>
                    <Text style={styles.title}>Notificações no app</Text>
                </View>
                <View style={styles.content}>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Novas vagas de emprego</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled1 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Novos Eventos</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled2 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Menções e marcações</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled3 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch3}
                            value={isEnabled3}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Status das atividades</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled4 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch4}
                            value={isEnabled4}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Novas Publicações</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled5 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch5}
                            value={isEnabled5}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Visualização de perfil</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled6 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch6}
                            value={isEnabled6}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Novas mensagens</Text>
                    
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled7 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch7}
                            value={isEnabled7}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Notificações por email</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled8 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch8}
                            value={isEnabled8}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>Atualizações semanais</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled9 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch9}
                            value={isEnabled9}
                        />
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notificacoes;
