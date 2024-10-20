import React, { useRef } from 'react';
import { View, Text, ImageBackground, TextInput, Pressable, Modal, Image, ScrollView, Keyboard } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Signup';
import { Formik } from "formik";
import * as Yup from "yup";
import { PinInput, PinInputRef } from '@pakenfit/react-native-pin-input';
import { validarCPF } from "../functions/validaCpf";
import LoadingModal from "../components/LoadingModal";
import axios from "axios";
import { API_URL } from "../constraints";
import { PassInput, PassInputRef } from "../components/pass/PassInput";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../functions/AsyncStorage';
import Input from "../components/TextInput";


const validationSchema = Yup.object().shape({
  pass: Yup.string()
    .required('Preencha com uma senha!')
    .test('len', 'A senha deve ter 6 dígitos!', val => val && val.replace(/[^\d]/g, '').length === 6)
});

function Login({ route }) {
  const navigation = useNavigation();
  const { cpf } = route.params || {};
  const [loading, setLoading] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [modalBlock, setModalBlock] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerDiv}>
        <Icon name="chevron-back-outline" size={60} style={styles.backButton} onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/icons/reintegra-fechadura.png')} style={{ height: 60, resizeMode: 'contain' }} />
        <Icon name="help-circle-outline" size={60} style={styles.helpButton} />
      </View>

      <View style={styles.main}>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Entrar na conta</Text>
          <Text style={[styles.text, styles.textCenter]}>Digite a sua senha para continuar</Text>
        </View>
       
        <Formik
          initialValues={{ pass: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            const { pass } = values;

            const formData = new FormData();
            formData.append('senha', pass);
            formData.append('identificacao', cpf.replaceAll('.', '').replaceAll('-', ''));

            axios.post(`${API_URL}/user/login`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then(res => {
              const data = res.data;
              if (data.entidade !== 'ex-detento') {
                navigation.navigate('Start');
              } else {
                setItem('token', data.token);
                setItem('usuario', data.usuario);

                axios.get(`${API_URL}/exDetento/completo/${data.usuario}`)
                  .then(res => {
                    setLoading(false);
                    if (res.data.completo) {
                      navigation.navigate('Home');
                    } else {
                      navigation.navigate('CompletarCurriculo');
                    }
                  })
                  .catch(err => {
                    setLoading(false);
                    navigation.navigate('Home');
                  });
              }
            })
            .catch(err => {
              setLoading(false);
              if (err.response) {
                const data = err.response.data;
                if (typeof data.bloqueado !== 'undefined') {
                  setModalBlock(true);
                } else {
                  setModalErro(true);
                }
              } else {
                setModalErro(true);
              }
            });
          }}
        >
          {({ handleSubmit, values, errors, touched, setFieldValue, setFieldTouched }) => (
            <View style={styles.inputContainer}>
              
              <View>
                <Input
                  label={''}
                  style={{ fontSize: 20, width: '90%' }}
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => {
                    setFieldValue('pass', text)
                    setFieldTouched('pass')
                    if (text.length >= 6) {
                      Keyboard.dismiss();
                    }
                  }}
                  onBlur={() => setFieldTouched('pass')}
                  maxLength={6}
                  keyboardType="numeric"
                  estilo={[{ borderColor: errors.pass && touched.pass ? '#EE4B2B' : 'gray' }]}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eye}>
                  <Icon name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={25} />
                </Pressable>
              </View>

              {errors.pass && touched.pass && <Text style={styles.errorText}>{errors.pass}</Text>}
              
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: Object.keys(errors).length > 0 ? 'gray' : '#ff914d',
                    borderColor: Object.keys(errors).length > 0 ? 'gray' : '#fc573b',
                    marginTop: 40,
                  },
                ]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Entrar</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>

      {/* Modais de erro */}
      <Modal visible={modalErro} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={[styles.text, { width: '100%', textAlign: 'center' }, styles.boldText]}>
              ❌ Ops! Acesso Negado! ❌
            </Text>
            <Text style={styles.textJust}>Houve um erro ao tentar acessar a sua conta.</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Verifique se digitou a senha corretamente.</Text>
            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Em caso de 3 tentativas falhas, sua conta será bloqueada.</Text>
            <Text style={styles.text}></Text>

            <Pressable style={[styles.button, { backgroundColor: 'white', width: '100%' }]} onPress={() => setModalErro(false)}>
              <Text style={[styles.buttonText, { color: '#112257', fontSize: 16 }]}>Tentar novamente</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal visible={modalBlock} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={[styles.text, { width: '100%', textAlign: 'center' }, styles.boldText]}>
              Conta bloqueada
            </Text>
            <Text style={styles.textJust}>Sua conta foi bloqueada. Entre em contato com o suporte.</Text>
            <Pressable style={[styles.button, { backgroundColor: 'white', width: '100%' }]} onPress={() => setModalBlock(false)}>
              <Text style={[styles.buttonText, { color: '#112257', fontSize: 16 }]}>Entendi</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <LoadingModal visible={loading} />
    </SafeAreaView>
  );
}

export default Login;
