import React, { useEffect, useRef, useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, Button, Modal } from "react-native";
import styles from "../styles/Choice";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { PinInput, PinInputRef } from '@pakenfit/react-native-pin-input';
import { validarCPF } from "../functions/validaCpf";
import LoadingModal from "../components/LoadingModal";
import axios from "axios";
import { API_URL } from "../constraints";
import { PassInput, PassInputRef } from "../components/pass/PassInput";


const validationSchema = Yup.object().shape({
  pass: Yup.string()
    .required('Senha é obrigatório!')
    .test('len', 'A senha deve ter 6 dígitos!', val => val && val.replace(/[^\d]/g, '').length === 6)
});

function SetupPass({ route }) {
  const { cpf, dob, email, nome, sexo } = route.params || {};

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [modalIncorreto, setModalIncorreto] = useState(false);
  const [modalErro, setModalErro] = useState(false);
  const [modalSucesso, setModalSucesso] = useState(false);
  const [confirmPass, setConfirmPass] = useState('');

  const maskPassword = (value) => {
    return '*'.repeat(value.length);
  };

  const [caixa1, setCaixa1] = useState(true);
  const [caixa2, setCaixa2] = useState(false);
  const [textoInstrucao, setTextoInstrucao] = useState('')
  const [textoBotao, setTextoBotao] = useState('')

  useEffect(() => {

    if (caixa1) {
      setTextoInstrucao('Crie a sua senha de acesso:')
      setTextoBotao('Continuar')
    } else {
      setTextoInstrucao('Agora, confirme a sua senha de acesso:')
      setTextoBotao('Confirmar')
    }
    ref2.current?.clear()

  }, [caixa1])

  
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          style={{ width: "80%", resizeMode: "contain" }}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.headerText}>{textoInstrucao}</Text>
        
        <Formik
          initialValues={{ pass: ''}}
          validationSchema={validationSchema}
          onSubmit={(values) => {


            if (caixa1) {
              setLoading(true);
              setCaixa1(false)
              setCaixa2(true)
              setTimeout(() => {
                setLoading(false);
              }, 400)
            } else {              

              if (values.pass != confirmPass) {
                setModalIncorreto(true);
              } else {
                setLoading(true);

                if (typeof cpf != 'undefined') {

                  const formData = new FormData();
                  formData.append('nome', nome);
                  formData.append('email', email);
                  formData.append('senha', values.pass);
                  formData.append('sexo', sexo);
                  formData.append('cpf', cpf);
                  formData.append('dataNasc', dob);
  
                  axios.post(`${API_URL}/exDetento/simple`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                  })
                  .then(res => {
                    setLoading(false)
                    setModalSucesso(true);
                  })
                  .catch(err => {
                    console.log(err)
                    setLoading(false)
                    setModalErro(true);
                  })

                } else {
                  setLoading(false)
                  setModalErro(true);
                }
                
               
              
              }
            }
            
          }}
        >
          {({ handleSubmit, values, errors, touched, setFieldValue }) => (
            <View>

              {caixa1 && (
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
              )}

              {caixa2 && (
                <View>

                <PassInput
                  onFillEnded={(otp) => {
                    setConfirmPass(otp);
                  }}
                  ref={ref2}
                  autoFocus
                  length={6}
                  secretDelay={300} 
                  inputStyle={[styles.pinInput, { width: 50, height: 50 }]}
                
                />
                </View>
              )}

              

              <View style={{ flex: 0.3 }}></View>

              <View style={[styles.botoes, {width: '100%'}]}>
                <Pressable style={styles.button1} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>{textoBotao}</Text>
                </Pressable>
              </View>

            </View>
          )}
        </Formik>
      </View>
      <LoadingModal visible={loading} />

      <Modal
        visible={modalIncorreto}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

          <Text style={styles.text}>❌ Confirmação de Senha Inválida ❌</Text>
          <Text style={styles.text}></Text>

          <Text style={styles.textJust}>Você errou na confirmação da senha.</Text>
          <Text style={styles.textJust}></Text>

          <Text style={styles.textJust}>Você pode voltar e digitar a senha novamente ou tentar confirmar a senha mais uma vez.</Text>
          <Text style={styles.textJust}></Text>
            
            <Text style={styles.textJust}>É importante anotar a sua senha em um <Text style={styles.boldText}>local seguro</Text> para não perder o acesso à plataforma!</Text>
            <Text style={styles.textJust}></Text>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button4, { flex: 1 }]} onPress={() => {
                setLoading(true)
                setModalIncorreto(false)
                setConfirmPass('')
                ref1.current?.clear()
                setCaixa1(true)
                setCaixa2(false)
                setTimeout(() => {
                  setLoading(false)
                }, 300)
              } } >
                <Text style={styles.buttonSmallText2}>Escolher Nova Senha</Text>
              </Pressable>
              <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                setModalIncorreto(false);
                ref2.current?.clear()
                }} >
                <Text style={styles.buttonSmallText}>Tentar Novamente</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </Modal>

      <Modal
        visible={modalErro}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

          <Text style={styles.text}>❌ Aconteceu Algum Erro ❌</Text>
          <Text style={styles.text}></Text>

          <Text style={styles.textJust}>Durante o processo, aconteceu algum erro e não podemos prosseguir com o cadastro agora.</Text>
          <Text style={styles.textJust}></Text>

          <Text style={styles.textJust}>Você pode <Text style={styles.boldText}>cancelar</Text> o cadastro agora e tentar novamente <Text style={styles.boldText}>mais tarde</Text> ou entrar em <Text style={styles.boldText}>contato com o nosso suporte</Text>.</Text>
          <Text style={styles.textJust}></Text>
            
            <Text style={styles.textJust}>Pedimos desculpas pela inconveniência.</Text>
            <Text style={styles.textJust}></Text>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button4, { flex: 1 }]} onPress={() => {
                setModalErro(false)
                navigation.replace('Start')
              } } >
                <Text style={styles.buttonSmallText2}>Cancelar</Text>
              </Pressable>
              <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                setModalErro(false)
                navigation.replace('Start')
                }} >
                <Text style={styles.buttonSmallText}>Suporte</Text>
              </Pressable>
            </View>
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

            <Text style={styles.text}>Concluímos o Pré-Cadastro! 🤩</Text>
            <Text style={styles.text}></Text>

            <Text style={styles.textJust}>Agora, você já pode acessar sua conta e continuar o processo.</Text>
            <Text style={styles.textJust}></Text>

            <Text style={styles.textJust}>Clique em "Entrar" para seguir para a próxima etapa.</Text>
            <Text style={styles.textJust}></Text>
            

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button3, { flex: 1 }]} onPress={() => { 
                  navigation.replace('Login' , {
                    cpf: cpf
                  });
                }} >
                <Text style={styles.buttonSmallText}>Entrar</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </Modal>
    </View>
  );
}

export default SetupPass;
