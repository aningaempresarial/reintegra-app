import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
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

function Vaga() {
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
          <Text style={styles.title}>Vaga de carpinteiro</Text>

          <View style={styles.imgVagaContainer}>
            <Image
              source={require("../../assets/images/destaque-carpintaria.png")}
              style={styles.imgVaga}
            />
          </View>
          <View style={styles.detalhesVagaContainer}>
            <Text style={styles.detalhesVaga}>
              Responsabilidades: Identificar e desenvolver novas oportunidades
              de negócios. Manter e fortalecer relacionamentos com clientes
              existentes. Apresentar propostas e negociar contratos.
            </Text>
            <Text style={styles.detalhesVaga}>
            Requisitos
              Mínimos: Experiência mínima de 2 anos em vendas. Habilidade em
              negociação e comunicação. Formação superior em Administração,
              Marketing ou áreas relacionadas. Disponibilidade para viagens.
            </Text>
            <Text style={styles.detalhesVaga}>
                Benefícios: Salário competitivo + comissão. Vale refeição e vale
              transporte. Plano de saúde e seguro de vida. Oportunidades de
              desenvolvimento profissional.
            </Text>
          </View>
          <TouchableOpacity style={styles.btnVaga}>
            <Text style={styles.textBtnVaga}>Aplicar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Vaga;
