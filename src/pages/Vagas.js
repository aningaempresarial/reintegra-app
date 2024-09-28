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

function Vagas() {

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

          <Text style={styles.title}>Vagas</Text>

          <View style={styles.vagasContainer}>
            <View style={styles.cardVaga}>
              <View style={styles.imgVagaContainer}>
                <Image
                  style={styles.imgVaga}
                  source={require("../../assets/images/destaque-carpintaria.png")}
                />
              </View>
              <View style={styles.infosVaga}>
                <Text style={styles.textVaga}>Vaga de carpinteiro</Text>
                <TouchableOpacity style={styles.btnVaga}>
                  <Text style={styles.textBtnVaga}>Candidatar-se</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.cardVaga}>
              <View style={styles.imgVagaContainer}>
                <Image
                  style={styles.imgVaga}
                  source={require("../../assets/images/destaque-balconista.png")}
                />
              </View>
              <View style={styles.infosVaga}>
                <Text style={styles.textVaga}>Vaga de balconista</Text>
                <TouchableOpacity style={styles.btnVaga}>
                  <Text style={styles.textBtnVaga}>Candidatar-se</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Vagas;
