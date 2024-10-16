import React, { useState } from 'react';
import styles from '../../styles/Configuracoes';
import { View, Text, StyleSheet, Image,ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Navbar } from '../../components/Navbar';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TermosPoliticas = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>

            <Navbar />

            <ScrollView style={{ width: '100%', paddingLeft: '5%', paddingRight: '5%', backgroundColor: '#f5f8ff' }}>
        
                <View style={styles.header}>
                
                    <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>Termos e Políticas | Reintegra</Text>
                    <Icon name='document-text' size={60} style={{color: 'grey'}}/>
                </View>
                <View style={{marginTop: 10, marginBottom:25}}>
                    <Text style={styles.topics}>Termos de Uso</Text>
                </View>
                <View>
                    <Text style={styles.termos}>1. Aceitação dos Termos</Text>
                    <Text style={styles.textoCorrido}>Ao acessar ou usar o aplicativo REINTEGRA, você concorda com os Termos de Uso aqui descritos. Caso não concorde, solicitamos que não utilizemos</Text>
                    <Text style={styles.termos}>2. Objetivo do Aplicativo</Text>
                    <Text style={styles.textoCorrido}>O REINTEGRA é uma plataforma voltada para a reintegração social de ex-presidiários, oferecendo oportunidades de emprego, estudo e desenvolvimento pessoal. O uso do aplicativo é exclusivo para essa finalidade</Text>
                    <Text style={styles.termos}>3. Cadastro e Acesso</Text>
                    <Text style={styles.textoCorrido}>Para acessar alguns recursos do REINTEGRA, o usuário deverá criar uma conta, fornecendo informações verídicas e atualizadas. O uso de informações falsas pode resultar na suspensão ou cancelamento da conta.</Text>
                    <Text style={styles.termos}>4. Responsabilidades do Usuário</Text>
                    <Text style={styles.textoCorrido}>O usuário se compromete a utilizar uma plataforma de maneira ética e dentro dos limites legais, sem realizar discriminação, preconceito ou qualquer forma.</Text>
                    <Text style={styles.termos}>5. Ofertas de Emprego e Estudo como oportunidades</Text>
                    <Text style={styles.termos}>6. Propriedade Intelectual</Text>
                    <Text style={styles.textoCorrido}>Todo o conteúdo e materiais do aplicativo (textos, gráficos, logotipos, ícones, etc.) são de propriedade exclusiva da REINTEGRA ou de seus parceiros, estando protegidos pelas leis de propriedade intelectual</Text>
                    <Text style={styles.termos}>7. Modificações nos Termos</Text>
                    <Text style={styles.textoCorrido}>O REINTEGRA reserva-se o direito de modificar ou alterar os Termos de Uso a qualquer momento. É responsabilidade do usuário verificar periodicamente os Termos para se manter atualizado</Text>
                    <Text style={styles.termos}>8. Rescisão</Text>
                    <Text style={styles.textoCorrido}>O REINTEGRA pode, a qualquer momento, suspender ou encerrar o acesso de um usuário que viole os Termos de Uso ou que utilize uma plataforma de forma inadequa</Text>
                </View>
                <View style={{marginTop: 10, marginBottom:25}}>
                    <Text style={styles.topics}>Políticas de Privacidade</Text>
                </View>
                <View>
                    <Text style={styles.termos}>1. Aceitação dos Termos</Text>
                    <Text style={styles.textoCorrido}>Ao acessar ou usar o aplicativo REINTEGRA, você concorda com os Termos de Uso aqui descritos. Caso não concorde, solicitamos que não utilizemos</Text>
                    <Text style={styles.termos}>2. Objetivo do Aplicativo</Text>
                    <Text style={styles.textoCorrido}>O REINTEGRA é uma plataforma voltada para a reintegração social de ex-presidiários, oferecendo oportunidades de emprego, estudo e desenvolvimento pessoal. O uso do aplicativo é exclusivo para essa finalidade</Text>
                </View>



                
            </ScrollView>

        </SafeAreaView>
    );
};


export default TermosPoliticas;
