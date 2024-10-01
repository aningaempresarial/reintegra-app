import React, { useState } from "react";
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
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Vaga";
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
import { getItem } from "../functions/AsyncStorage";

function Vaga({ route }) {
  const navigation = useNavigation();

  const [modalCandidato, setModalCandidato] = useState(false);
  const { vagaId, nomeVaga, textoVaga, imagemVaga, empresaVaga } = route.params || {};

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
      <ScrollView style={{ width: "100%", backgroundColor: "#f5f8ff" }}>
        <View style={styles.main}>
          <Text style={styles.title}>{nomeVaga}</Text>

          <View style={styles.imgVagaContainer}>
            <Image
              source={{ uri: imagemVaga }}
              style={styles.imgVaga}
            />
          </View>
          <View style={styles.detalhesVagaContainer}>
            <Text style={styles.detalhesVaga}>{textoVaga}</Text>
          </View>
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

            <Text style={styles.textJust}>Em caso de dúvidas, você poderá enviar mensagem para a empresa.</Text>
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
