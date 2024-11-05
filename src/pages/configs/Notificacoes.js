import React, { useEffect, useState } from 'react';
import createStyle from '../../styles/Configuracoes';
import { View, Text, Switch, ScrollView, SafeAreaView } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { getItem, setItem } from '../../functions/AsyncStorage';

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
                    <Text style={styles.title}>Notificações no app</Text>
                </View>
                <View style={styles.content}>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: fontSize-3}}>Novas vagas de emprego</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled1 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: fontSize-3}}>Novos Eventos</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled2 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: fontSize-3}}>Novas Publicações</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled5 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch5}
                            value={isEnabled5}
                        />
                    </View>
                    <View  style={styles.buttonOptions}>
                        <Text style={{color: 'grey', fontWeight: 'bold', fontSize: fontSize-3}}>Novas mensagens</Text>
                    
                        <Switch
                            trackColor={{ false: "#767577", true: "grey" }}
                            thumbColor={isEnabled7 ? "#ff5733" : "#f4f3f4"}
                            onValueChange={toggleSwitch7}
                            value={isEnabled7}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notificacoes;
