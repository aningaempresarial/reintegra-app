import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal, TextInput, Image, ScrollView, SafeAreaView, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/Signup";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import LoadingModal from "../components/LoadingModal";
import { API_URL } from "../constraints";

import Input from "../components/TextInput";
import Icon from 'react-native-vector-icons/Ionicons';

const validationSchema = Yup.object().shape({
  pass: Yup.string()
    .required('Senha é obrigatória!')
    .min(6, 'A senha deve ter 6 caracteres'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('pass'), null], 'As senhas não coincidem')
    .required('Confirmação de senha é obrigatória!')
});

function SetupPass({ route }) {
  const { cpf, dob, email, nome, sexo } = route.params || {};
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [modalSucesso, setModalSucesso] = useState(false);


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerDiv}>
        <Icon name="chevron-back-outline" size={60} style={styles.backButton} onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/icons/reintegra-fechadura.png')} style={{ height: 60, resizeMode: 'contain' }} />
        <Icon name="help-circle-outline" size={60} style={styles.helpButton} />
      </View>



      <ScrollView style={{ width: '90%'}} >
        
        <View style={[styles.textContainer]}>
          <Text style={styles.title}>Senha de Acesso</Text>
          <Text style={[styles.text, styles.textCenter]}>Crie a sua senha para acessar o aplicativo Reintegra</Text>

          <View style={{
            backgroundColor: '#ff914d',
            width: 35,
            height: 35,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 5,
            top: 0
          }}>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 'bold',
            }}>2</Text>
          </View>
            
        </View>

        <Formik
          initialValues={{ pass: '', confirmPass: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('email', email);
            formData.append('senha', values.pass);
            formData.append('sexo', sexo);
            formData.append('cpf', cpf.replaceAll('.', '').replaceAll('-', ''));
            formData.append('dataNasc', dob);

            axios.post(`${API_URL}/exDetento/simple`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' }
            })
              .then(() => {
                setLoading(false);
                setModalSucesso(true);
              })
              .catch(() => {
                setLoading(false);
                setModalErro(true);
              });
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched, setFieldValue, setFieldTouched }) => (
            <View style={styles.inputContainer}>
              <View>
                <Input
                  label={'Senha'}
                  style={{ fontSize: 20, width: '90%' }}
                  estilo={[{ borderColor: errors.pass && touched.pass ? '#EE4B2B' : 'gray' }]}
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => {
                    setFieldValue('pass', text)
                    setFieldTouched('pass')
                    if (text.length >= 6) {
                      Keyboard.dismiss();
                    }
                  }}
                  onBlur={() => setFieldTouched('pass')}
                  keyboardType="numeric"
                  maxLength={6}
                />
                
                <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eye}>
                  <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} />
                </Pressable>
              </View>

              {errors.pass && touched.pass && <Text style={styles.errorText}>{errors.pass}</Text>}
              
              <View>
                <Input
                  label={'Confirmação de Senha'}
                  style={[{ fontSize: 20, width: '90%' }]}
                  estilo={[{ borderColor: errors.confirmPass && touched.confirmPass ? '#EE4B2B' : 'gray' }]}
                  
                  secureTextEntry={!showConfirmPassword}
                  onChangeText={(text) => {
                    setFieldValue('confirmPass', text)
                    setFieldTouched('confirmPass')
                    if (text.length >= 6) {
                      Keyboard.dismiss();
                    }
                  }}
                  onBlur={() => setFieldTouched('confirmPass')}
                  keyboardType="numeric"
                  maxLength={6}
                />
  
                <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eye}>
                  <Icon name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'} size={25} />
                </Pressable>
              </View>

              {errors.confirmPass && touched.confirmPass && <Text style={styles.errorText}>{errors.confirmPass}</Text>}
              <Pressable  style={[
                styles.button,
                {
                  backgroundColor: Object.keys(errors).length > 0 ? 'gray' : '#ff914d',
                  borderColor: Object.keys(errors).length > 0 ? 'gray' : '#fc573b',
                  marginTop: 40,
                },
              ]} onPress={handleSubmit} >
                <Text style={styles.buttonText}>Finalizar</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>


      <Modal
        visible={modalErro}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

          <Text style={[styles.text, { width: '100%', textAlign: 'center'}, styles.boldText]}>❌ Aconteceu algum erro! ❌</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Ao realizar o seu cadastro, aconteceu algum erro nos nossos sistemas.</Text>
            <Text style={styles.textJust}></Text>
            <Text style={styles.textJust}>Estamos trabalhando para arrumar esse problema. Tente novamente mais tarde.</Text>
            <Text style={styles.textJust}></Text>

            <Pressable style={[styles.button, { backgroundColor: 'white', width: '100%' } ]} onPress={() => setModalErro(false)}>
              <Text style={[styles.buttonText, { color: '#112257', fontSize: 16 }]}>Tentar novamente</Text>
            </Pressable>
          </View>

        </View>

      </Modal>


      <Modal
        visible={modalSucesso}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

            <Text style={[styles.text, { width: '100%', textAlign: 'center'}, styles.boldText]}>
              Cadastro feito com sucesso! 🤩
            </Text>

            <Text style={styles.textJust}></Text>
            <Text style={styles.textJust}>Pronto, terminamos o seu pré-cadastro.</Text>
            <Text style={styles.textJust}></Text>
            <Text style={styles.textJust}>
              Clique em "Entendi" para voltar e entrar na sua conta.
            </Text>
            <Text style={styles.textJust}></Text>

            <Pressable style={[styles.button, { backgroundColor: 'white', width: '100%' } ]} onPress={() => navigation.replace('Start')}>
              <Text style={[styles.buttonText, { color: '#112257', fontSize: 16 }]}>Entendi</Text>
            </Pressable>
          </View>

        </View>

      </Modal>


      <LoadingModal visible={loading} />
    </SafeAreaView>
  );
}

export default SetupPass;
