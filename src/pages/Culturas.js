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
import styles from "../styles/Culturas";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Navbar } from "../components/Navbar";
import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import LoadingModal from "../components/LoadingModal";

function Culturas() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingModal/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar/>
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

          <Text style={styles.title}>Cultura</Text>

          <View style={styles.culturaContainer}>
            <View style={styles.cardCultura}>
              <View style={styles.imgCulturaContainer}>
                <Image
                  style={styles.imgCultura}
                  source={require("../../assets/images/destaque-palestra.png")}
                />
              </View>
              <View style={styles.infosCultura}>
                <Text style={styles.textCultura}>Palestra de Empreendedorismo</Text>
                <TouchableOpacity style={styles.btnCultura}>
                  <Text style={styles.textBtnCultura}>Candidatar-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Culturas;
