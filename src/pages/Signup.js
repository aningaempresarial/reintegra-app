import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Signup";
import Input from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import * as Yup from "yup";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import axios from "axios";
import { API_URL } from "../constraints";
import LoadingModal from "../components/LoadingModal";
import { SafeAreaView } from 'react-native-safe-area-context';

const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .required('Nome é obrigatório.'),
  nomeMae: Yup.string()
    .required('Nome da Mãe é obrigatório.'),
  sexo: Yup.string()
    .required('Sexo é obrigatório.'),
  dob: Yup.string()
    .required('Data de Nascimento é obrigatório.'),
  email: Yup.string()
    .required('E-mail é obrigatório.')
    .email('O E-mail é inválido.')
  
});

const formatDateLocal = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

function Signup({ route }) {
  const { cpf } = route.params || {};
  const navigation = useNavigation();
  
  const [modalInformativo, setModalInformativo] = useState(true);
  const [modalErro, setModalErro] = useState(false);
  const [modalSucesso, setModalSucesso] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const options = [
    { label: "Masculino", value: "MASCULINO" },
    { label: "Feminino", value: "FEMININO" },
  ];

  const [show, setShow] = useState(false);

  const showDatepicker = () => {
    setShow(true);
  };



  return (
    <SafeAreaView style={styles.container}>

      <View style={{ marginBottom: 30 }}></View>

      <ScrollView >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Criar uma conta</Text>
          <Text style={[styles.text, styles.textCenter]}>Preencha com os seus dados</Text>
        </View>
        <Formik
          initialValues={{ nome: '', nomeMae: '', email: '', sexo: 'MASCULINO', dob: new Date() }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setLoading(true);
            const {nome, email, nomeMae, sexo, dob} = values;
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('nomeMae', nomeMae);
            formData.append('sexo', sexo);
            formData.append('cpf', cpf);
            formData.append('dob', formatDateLocal(new Date(dob)));
            try {
              axios.post(`${API_URL}/ssp`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
              .then(res => {
                setTimeout(() => {
                  const resposta = res.data.existe;
                  if (resposta) {
                    setUser({
                      nome: nome,
                      sexo: sexo,
                      cpf: cpf,
                      dob: formatDateLocal(new Date(dob)),
                      email: email
                    })
                    setModalSucesso(true)
                  } else {
                    setModalErro(true)
                  }
                  setLoading(false)
                }, 500)
        
              })
              .catch(err => {
                console.log(err)
                setLoading(false)
              })
            } catch (error) {
              setLoading(false)
            }
          }}
          >
        
            {({ handleSubmit, values, errors, touched, setFieldValue }) => (
            <View style={styles.inputContainer}>
              <Input
                label={'Nome Completo'}
                style={{ width: '90%' }}
                value={values.nome}
                onChangeText={(text) => {setFieldValue('nome', text);}}
              />
              {errors.nome && touched.nome ? (
                  <Text style={styles.errorText}>{errors.nome}</Text>
              ) : null}

              <Input
                label={'E-mail'}
                style={{ width: '90%' }}
                value={values.email}
                onChangeText={(text) => {setFieldValue('email', text);}}
              />
              {errors.email && touched.email ? (
                  <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
        
              <Input
                label={'Nome da Mãe'}
                style={{ width: '90%' }}
                value={values.nomeMae}
                onChangeText={(text) => {setFieldValue('nomeMae', text);}}
              />
              {errors.nomeMae && touched.nomeMae ? (
                  <Text style={styles.errorText}>{errors.nomeMae}</Text>
              ) : null}
              <SelectInput
                    label="Sexo"
                    selectedValue={values.sexo}
                    onValueChange={(text) => {setFieldValue('sexo', text);}}
                    options={options}
                />
              {errors.sexo && touched.sexo ? (
                  <Text style={styles.errorText}>{errors.sexo}</Text>
              ) : null}
        
              <Input label={'Data de Nascimento'} style={{ width: '90%' }} textContentType="birthdateDay" value={values.dob.toLocaleString('pt-BR').substr(0, 10)} onPress={showDatepicker} />
              {errors.dob && touched.dob ? (
                  <Text style={styles.errorText}>{errors.dob}</Text>
              ) : null}
                {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={values.dob}
                  mode='date'
                  onChange={(event, selectedDate) => {
                    setShow(false);
                    setFieldValue('dob', selectedDate);
                  }}
                />
              )}
              <View style={[styles.botoes, {marginTop: 20}]}>
                <Pressable style={styles.button2} onPress={() => { navigation.replace('Start') }}>
                  <Text style={styles.buttonText2}>Cancelar</Text>
                </Pressable>
                <Pressable style={styles.button1} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Continuar</Text>
                </Pressable>
              </View>
        
            </View>
            )}
        </Formik>
      </ScrollView>

      


      <Modal
        visible={modalInformativo}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

            <Text style={styles.text}>Boas vindas! 🎉</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Percebemos que você <Text style={styles.boldText}>não tem uma conta</Text> no Reintegra. Vamos criar uma agora?</Text>
            <Text style={styles.textJust}></Text>
            
            <Text style={styles.textJust}>Para isso, vamos precisar de mais alguns dados. Clique em <Text style={styles.boldText}>continuar</Text> para adicionar as informações.</Text>
            <Text style={styles.textJust}></Text>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={styles.buttonConfirm} onPress={() => setModalInformativo(false)} >
                <Text style={styles.buttonSmallText}>Continuar</Text>
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

            <Text style={styles.text}>Ops! Verifique os seus dados!</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Consultamos os dados da <Text style={styles.boldText}>Secretária de Segurança Pública</Text> e não encontramos nenhum registro sobre você.</Text>
            <Text style={styles.textJust}></Text>
            
            <Text style={styles.textJust}>Você pode <Text style={styles.boldText}>revisar os seus dados</Text> ou enviar uma <Text style={styles.boldText}>mensagem para o suporte</Text>.</Text>
            <Text style={styles.textJust}></Text>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={styles.button1} >
                <Text style={styles.buttonSmallText}>Suporte</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={() => setModalErro(false)}>
                <Text style={styles.buttonSmallText2}>Revisar</Text>
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

            <Text style={styles.text}>Perfeito! 😉</Text>

            <Text style={styles.text}></Text>
            <Text style={styles.textJust}>Agora precisamos cadastrar os dados de acesso.</Text>
            <Text style={styles.textJust}></Text>
            
            <Text style={styles.textJust}>É importante anotar a sua senha em um <Text style={styles.boldText}>local seguro</Text> para não perder o acesso à plataforma!</Text>
            <Text style={styles.textJust}></Text>

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={styles.button1} onPress={() => navigation.replace('SetupPass', user) } >
                <Text style={styles.buttonSmallText}>Continuar</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </Modal>


      <LoadingModal visible={loading} />
    </SafeAreaView>
  );
}

export default Signup;
