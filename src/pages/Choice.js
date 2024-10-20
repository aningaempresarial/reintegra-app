import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet, TextInput, Keyboard } from "react-native";
import styles from "../styles/Choice";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { PinInput, PinInputRef } from '@pakenfit/react-native-pin-input';
import { validarCPF } from "../functions/validaCpf";
import LoadingModal from "../components/LoadingModal";
import axios from "axios";
import { API_URL } from "../constraints";
import Icon from 'react-native-vector-icons/Ionicons';

const validationSchema = Yup.object().shape({
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .test('len', 'CPF deve ter 11 dígitos', val => val && val.replace(/[^\d]/g, '').length === 11)
    .test('cpf', 'CPF inválido', val => validarCPF(val))
});

const formatarCPF = (value) => {
  value = value.replace(/\D/g, '');

  value = value.slice(0, 11);

  if (value.length <= 3) return value;
  if (value.length <= 6) return `${value.slice(0, 3)}.${value.slice(3)}`;
  if (value.length <= 9) return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
  return `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
};


function Choice() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.headerDiv}>
        <Icon name="chevron-back-outline" size={60} style={styles.backButton} onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/icons/reintegra-fechadura.png')} style={{ height: 60, resizeMode: 'contain' }} />
        <Icon name="help-circle-outline" size={60} style={styles.helpButton} />
      </View>

      <View style={styles.main}>
        <Formik
          initialValues={{ cpf: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            axios.get(`${API_URL}/exDetento/existe/${values.cpf.replaceAll('.', '').replaceAll('-', '')}`)
              .then(res => {
                const resultado = res.data.existe;
                setTimeout(() => {
                  setLoading(false);
                  if (resultado) {
                    navigation.navigate('Login', { cpf: values.cpf });
                  } else {
                    navigation.navigate('NoAccountExplicacao', { cpf: values.cpf });
                  }
                }, 1000);
              })
              .catch(err => {
                setLoading(false);
                console.error(err);
              });
          }}
        >
          {({ handleSubmit, values, errors, touched, setFieldValue, setFieldTouched }) => (
            <View style={{ width: '90%' }}>
              <Text style={styles.headerText}>Digite o seu CPF:</Text>
              <TextInput
                style={[styles.input, { borderColor: errors.cpf && touched.cpf ? '#EE4B2B' : 'gray' }]}
                value={values.cpf}
                onChangeText={(text) => {
                  const cpfFormatado = formatarCPF(text);
                  setFieldValue('cpf', cpfFormatado);
                  if (cpfFormatado.length >= 14) {
                    Keyboard.dismiss();
                  }
                }}
                onBlur={() => setFieldTouched('cpf', true)}
                placeholder="000.000.000-00"
                keyboardType="numeric"
                maxLength={14}
              />
              {errors.cpf && touched.cpf ? (
                <Text style={styles.errorText}>{errors.cpf}</Text>
              ) : null}
              <View style={{ flex: 0.3 }}></View>
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Continuar</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
      <LoadingModal visible={loading} />
    </View>
  );
}

export default Choice;
