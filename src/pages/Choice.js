import React, { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import styles from "../styles/Choice";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import { PinInput, PinInputRef } from '@pakenfit/react-native-pin-input';
import { validarCPF } from "../functions/validaCpf";
import LoadingModal from "../components/LoadingModal";
import axios from "axios";
import { API_URL } from "../constraints";


const validationSchema = Yup.object().shape({
  cpf: Yup.string()
    .required('CPF é obrigatório')
    .test('len', 'CPF deve ter 11 dígitos', val => val && val.replace(/[^\d]/g, '').length === 11)
    .test('cpf', 'CPF inválido', val => validarCPF(val))
});

function Choice() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          style={{ width: "80%", resizeMode: "contain" }}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.headerText}>Por favor, digite o seu CPF:</Text>
        
        <Formik
          initialValues={{ cpf: '' }}
          validationSchema={validationSchema}
          onSubmit={(values) => {

            setLoading(true);

            axios.get(`${API_URL}/exDetento/existe/${values.cpf}`)
            .then(res => {
              const resultado = res.data.existe;
              
              setTimeout(() => {
                setLoading(false);
                
                if (resultado) {
                  navigation.replace('Login', {
                    cpf: values.cpf
                  });
                } else {
                  navigation.replace('Signup', {
                    cpf: values.cpf
                  });
                }
              }, 1000);

            })
            .catch(err => {

            })

          }}
        >
          {({ handleSubmit, values, errors, touched, setFieldValue }) => (
            <View>

              <PinInput
                onFillEnded={(otp) => {
                  setFieldValue('cpf', otp);
                }}
                autoFocus
                length={11}
                inputStyle={styles.pinInput}
               
              />
              
              {errors.cpf && touched.cpf ? (
                <Text style={styles.errorText}>{errors.cpf}</Text>
              ) : null}

              <View style={{ flex: 0.3 }}></View>

              <Pressable style={styles.button1} onPress={handleSubmit}>
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
