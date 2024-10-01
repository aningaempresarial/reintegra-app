import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../styles/Vagas";
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

function Vagas() {
  
  const navigation = useNavigation();
  const [empregos, setEmpregos] = useState([])

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingModal />;
  }


  axios.get(`${API_URL}/post/all/emprego`)
  .then(res => {
    const empregoCompletoImagem = res.data.map(emprego => ({
      ...emprego,
      imagemPostagem: `${API_URL}${emprego.imagemPostagem}`,
      fotoPerfil: `${API_URL}${emprego.fotoPerfil}`
    }));
    setEmpregos(empregoCompletoImagem);
  })
  .catch(err => {
    console.error("Erro ao buscar dados: ", err);
  });
  

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView style={{ width: "100%", backgroundColor: "#f5f8ff" }}>
        <View style={styles.main}>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBarDiv}>
              <TextInput style={styles.searchBar} placeholder="Buscar..." />
            </View>

            <View style={styles.searchIconDiv}>
              <Icon name="search" size={30} />
            </View>
          </View>

          <Text style={styles.title}>Vagas</Text>

          <View style={styles.vagasContainer}>

            {empregos.map((emprego, i) => (
              <View key={i} style={styles.cardCultura}>
                <View style={styles.imgVagaContainer}>
                  <Image
                    style={styles.imgVaga}
                    source={{ uri: emprego.imagemPostagem }}
                  />
                </View>
                <View style={styles.infosVaga}>
                  <Text style={styles.textVaga}>{emprego.tituloPostagem}</Text>
                  <TouchableOpacity
                    style={styles.btnVaga}
                    onPress={() => navigation.navigate("Vaga", {
                      vagaId: emprego.idPostagem,
                      nomeVaga: emprego.tituloPostagem,
                      textoVaga: emprego.conteudoPostagem,
                      imagemVaga: emprego.imagemPostagem
                    })}
                  >
                    <Text style={styles.textBtnVaga}>Ver mais</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
}

export default Vagas;
