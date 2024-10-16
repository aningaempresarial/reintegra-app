import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import Input from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, Switch } from 'react-native';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const EditarPerfil = () => {

    const [selectedGenero, setSelectedGenero] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.imgEditContainer}>
                    <Image style={styles.imgEdit} source={require('../../../assets/images/usuario-photo.jpg')}/>
                </View>
                <View >
                    <Text style={styles.title}>Maria Silva</Text>
                    <Text style={{textAlign: 'center', fontSize: 17, color: 'grey'}}>São Paulo, SP</Text>
                    <View style={styles.line} />
                    <View style={{margin: 15}}>
                        <Text style={{fontSize: 21, fontWeight: 'bold', marginTop: 15}}>Dados Pessoais</Text>
                        
                        <Input
                            label={'Nome Completo'}
                            placeholder={'Maria José da Silva'}
                            style={{ width: '90%' }}   
                        />
                        <Input
                            label={'Como Gostaria de ser Chamado? (opcional)'}
                            placeholder={'Maria Silva'}
                            style={{ width: '90%' }}   
                        />
                        <Input
                            label={'CPF'}
                            placeholder={'xxx.xxx.xxx-xx'}
                            style={{ width: '90%' }}   
                        />
                        <Input
                            label={'Data de Nascimento'}
                            placeholder={'DD/MM/AAAA'}
                            style={{ width: '90%' }}   
                        />
                        <SelectInput
                            label="Gênero"
                            placeholder={'Selecione seu gênero...'}
                            selectedValue={selectedGenero}  
                            onValueChange={(value) => setSelectedGenero(value)} 
                            options={[
                                { label: 'Feminino', value: 'Feminino' },
                                { label: 'Masculino', value: 'Masculino' },
                            ]}
                        />
                        <Input
                            label={'Nome Completo da Mãe'}
                            placeholder={'Roseli Rosa da Silva'}
                            style={{ width: '90%' }}   
                        />
                        <View style={styles.switchButton}>
                            
                            <Switch
                                trackColor={{ false: "#767577", true: "grey" }}
                                thumbColor={isEnabled ? "#ff5733" : "#f4f3f4"}
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                            <Text style={{color: 'grey'}}>{isEnabled ? 'Consta.' : 'Não Consta.'}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};


export default EditarPerfil;
