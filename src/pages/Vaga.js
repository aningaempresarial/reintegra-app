import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal
} from "react-native";

import { formatarTempoDecorrido } from '../functions/formatarTempo';
import Icon from "react-native-vector-icons/Ionicons";
import createStyle from '../styles/Home';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navbar } from "../components/Navbar";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import LoadingModal from "../components/LoadingModal";
import axios from "axios";
import { API_URL } from "../constraints";
import { getItem, setItem } from "../functions/AsyncStorage";

function Vaga({ route }) {
  const navigation = useNavigation();

  const [modalCandidato, setModalCandidato] = useState(false);
  const { vagaId, nomeVaga, textoVaga, imagemVaga, empresaVaga, destaque } = route.params || {};

  const [vaga, setVaga] = useState({
    nomeVaga: '',
    descricaoVaga: '',
    requisitosVaga: '',
    salarioVaga: '',
    tipoContrato: '',
    tipoEscolaridade: '',
    cargaHoraria: '',
    horarioVaga: '',
  })
  
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
  
  const [timestamp, setTimestamp] = useState(new Date().getTime());

  const styles = createStyle(fontSize);

  useEffect(() => {
    console.log(vagaId)
    axios.get(`${API_URL}/post/vagas/id/${vagaId}`)
    .then(res => {
      console.log(res.data)
      setVaga(res.data)
    })
    .catch(err => {
      console.log(err)
    })

  }, [])

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingModal />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView style={{ width: "100%", backgroundColor: "white" }}>
        <View style={styles.main}>

          <View style={styles.oportunidadeCard}>

            <Pressable style={styles.divInfoUsuario} onPress={() => {
              navigation.navigate('PerfilEmpresa', {
                usuario: destaque.usuario
              })
            }}>
              <Image
                style={styles.empresaFoto}
                source={{ uri: destaque.fotoPerfil + `?t=${timestamp}` }}
              />

              <View style={styles.infoUsuario}>
                <Text style={styles.nomeUsuario}>{ destaque.nomeEmpresa }</Text>
                <Text style={styles.textoTempoOportunidade}>{formatarTempoDecorrido(destaque.dtPostagem)}</Text>
              </View>
            </Pressable>

            <View style={{ width: '90%' }}>
              <Text style={styles.tituloPost}>{ destaque.tituloPostagem }</Text>
              <Text style={styles.corpoPost}>{ destaque.conteudoPostagem }</Text>
            </View>


            <Image
              style={styles.imagemOportunidade}
              source={{ uri: destaque.imagem }}
            />

            
            <View style={{ width: '90%' }}>
              <Text style={styles.tituloPost}>Requisitos</Text>
              <Text style={styles.corpoPost}>{ vaga.requisitosVaga }</Text>

              <Text style={styles.tituloPost}>Salário</Text>
              <Text style={styles.corpoPost}>R$ { vaga.salarioVaga }</Text>

              <Text style={styles.tituloPost}>Tipo de Contrato</Text>
              <Text style={styles.corpoPost}>{ vaga.tipoContrato }</Text>

              <Text style={styles.tituloPost}>Escolaridade Mínima</Text>
              <Text style={styles.corpoPost}>{ vaga.tipoEscolaridade }</Text>

              <Text style={styles.tituloPost}>Carga Horária</Text>
              <Text style={styles.corpoPost}>{ vaga.cargaHoraria }</Text>


              <Text style={styles.tituloPost}>Horário</Text>
              <Text style={styles.corpoPost}>{ vaga.horarioVaga }</Text>


              <TouchableOpacity style={styles.btnVaga} onPress={() => {
                    setModalCandidato(true)

                    getItem('token')
                    .then(res => {


                      const formData = new FormData();
                      formData.append('token', res);
                      formData.append('tituloVaga', nomeVaga)
          
                      axios.post(`${API_URL}/post/aplicar-vaga`, formData, {
                        headers: {
                          'Content-Type': 'multipart/form-data'
                        }
                      })
                    })
                    
                  }}>
                  <Text style={styles.textBtnVaga}>Aplicar</Text>
                </TouchableOpacity>
            </View>

          </View>
         
         

        </View>
      </ScrollView>

      <Modal
        visible={modalCandidato}
        transparent={true}
        
      >
        <View
          style={styles.modal}
        >

          <View style={styles.modalContent}>

            <Text style={styles.text}>Você se candidatou para essa vaga!</Text>
            <Text style={styles.text}></Text>

            <Text style={styles.textJust}>Agora é só esperar!</Text>
            <Text style={styles.textJust}></Text>

            <Text style={styles.textJust}>Em breve a empresa entrará em contato com você através do chat!</Text>
            <Text style={styles.textJust}></Text>
            

            <View style={[styles.botoes, {width: '100%'}]}>
              <Pressable style={[styles.button4, { flex: 1 }]} onPress={() => { 
                  setModalCandidato(false);
                  navigation.goBack();
                }} >
                <Text style={styles.buttonSmallText2}>Finalizar</Text>
              </Pressable>
            </View>
          </View>

        </View>

      </Modal>
    </SafeAreaView>
  );
}

export default Vaga;
