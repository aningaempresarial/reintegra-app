import React, { useRef } from 'react';
import { View, Text, ImageBackground, TextInput, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/Login';
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
  
  const ref1 = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Entrar na conta</Text>
        <Text style={[styles.text, { textAlign: 'center' }]}>Digite a sua senha para continuar</Text>
      </View>
      <View style={styles.inputContainer}>
        
       
      <Formik
          initialValues={{ pass: ''}}
          validationSchema={validationSchema}
          onSubmit={(values) => {

            setLoading(true);

            const { pass } = values;

            const formData = new FormData();
            formData.append('senha', pass);
            formData.append('identificacao', cpf)

            axios.post(`${API_URL}/user/login`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            })
            .then(res => {
              const data = res.data
              console.log(data)

              if (data.entidade != 'ex-detento') {
                navigation.navigate('Start')
              } else {
                setItem('token', data.token);
                setItem('usuario', data.usuario);

                axios.get(`${API_URL}/exDetento/completo/${data.usuario}`)
                .then(res => {
                  setLoading(false);
                  if (res.data.completo) {
                    navigation.navigate('Home')
                  } else {
                    navigation.navigate('CompletarCurriculo')
                  }
                })
                .catch(err => {
                  setLoading(false);
                  navigation.navigate('Home')
                })
              }
            })
            .catch(err => {
              
              if (err.response) {
                const data = err.response.data;
        
                if (typeof data.bloqueado !== 'undefined') {
                  setLoading(false)
                  setModalBlock(true)
                } else {
                  setLoading(false)
                  setModalErro(true)
                }

              } else {
                setLoading(false)
                setModalErro(true)
              }

            })

          }}
        >
          {({ handleSubmit, values, errors, touched, setFieldValue }) => (
            <View>

             
                <View>

              <PassInput
                  onFillEnded={(otp) => {
                    setFieldValue('pass', otp);
                  }}
                  ref={ref1}
                  autoFocus
                  length={6}
                  secretDelay={300} 
                  inputStyle={[styles.pinInput, { width: 50, height: 50}]}
                
                />
              
                {errors.pass && touched.pass ? (
                  <Text style={styles.errorText}>{errors.pass}</Text>
                ) : null}
                  
              </View>
            
              <View style={{ flex: 0.3 }}></View>

              <View style={[styles.botoes, {width: '100%'}]}>
                <Pressable style={styles.button1} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Entrar</Text>
                </Pressable>
              </View>

            </View>
          )}
        </Formik>

      </View>


      <Modal
        visible={modalErro}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

            <Text style={styles.text}>❌ Senha Incorreta ❌</Text>
            <Text style={styles.text}></Text>

            <Text style={styles.textJust}>Verifique a senha e tente novamente.</Text>
            <Text style={styles.textJust}></Text>

            <Text style={styles.textJust}>Se você errar a senha 3 vezes a sua conta será <Text style={styles.boldText}>bloqueada</Text>.</Text>
            <Text style={styles.textJust}></Text>
            

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                setModalErro(false)
                ref1.current?.clear()
                }} >
                <Text style={styles.buttonSmallText}>Tentar Novamente</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </Modal>

      <Modal
        visible={modalBlock}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

            <Text style={styles.text}>⚠️ Conta Bloqueada ⚠️</Text>
            <Text style={styles.text}></Text>

            <Text style={styles.textJust}>A sua conta foi bloqueada por excesso de tentativas de login malsucedidas.</Text>
            <Text style={styles.textJust}></Text>

            <Text style={styles.textJust}>Se você acredita que isso foi um engano ou precisa de ajuda, por favor, entre em contato com o suporte.</Text>
            <Text style={styles.textJust}></Text>

          

            
            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button4, { flex: 1 }]} onPress={() => { 
                setModalErro(false)
                }} >
                <Text style={styles.buttonSmallText2}>Suporte</Text>
              </Pressable>
            </View>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                setModalErro(false)
                navigation.replace('Start')
                }} >
                <Text style={styles.buttonSmallText}>Voltar ao Início</Text>
              </Pressable>
            </View>

          </View>

        </View>

      </Modal>


      <LoadingModal visible={loading} />
    </SafeAreaView>
  );
}

export default Login;
