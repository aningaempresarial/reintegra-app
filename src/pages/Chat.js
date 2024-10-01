import React, { useState } from "react";
import styles from "../styles/Chat";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconA from "react-native-vector-icons/FontAwesome";
import { Navbar } from "../components/Navbar";
import PagerView from "react-native-pager-view";
import { formatarTempoDecorrido } from "../functions/formatarTempo";
import { useNavigation } from "@react-navigation/native";
import {
  Poppins_700Bold,
  Poppins_400Regular,
  useFonts,
} from "@expo-google-fonts/poppins";
import LoadingModal from "../components/LoadingModal";

const Chat = () => {
  const navigation = useNavigation();

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
        <View style={styles.main}>
          <Text style={styles.title}>Conversa com Microsoft</Text>

          <ScrollView style={styles.conversaDiv}>
          <View style={styles.textEnviadoDiv}>
              <View style={styles.recebidoMensagem}>
                <Text style={styles.text}>Oiii, Microsoft</Text>
              </View>
              <Image
                source={require("../../assets/images/usuario-photo.jpg")}
                style={styles.imgMensagem}
              />
            </View>
            <View style={styles.textRecebidoDiv}>
              <Image
                source={require("../../assets/images/microsoft-photo.jpeg")}
                style={styles.imgMensagem}
              />
              <View style={styles.enviadoMensagem}>
                <Text style={styles.text}>Boa tarde!</Text>
              </View>
            </View>
            <View style={styles.textEnviadoDiv}>
              <View style={styles.recebidoMensagem}>
                <Text style={styles.text}>Me dá um emprego?</Text>
              </View>
              <Image
                source={require("../../assets/images/usuario-photo.jpg")}
                style={styles.imgMensagem}
              />
            </View>
            <View style={styles.textRecebidoDiv}>
              <Image
                source={require("../../assets/images/microsoft-photo.jpeg")}
                style={styles.imgMensagem}
              />
              <View style={styles.enviadoMensagem}>
                <Text style={styles.text}>Não.</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.inputDiv}>
            <TextInput style={styles.input} placeholder="Digite uma mensagem" />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Chat;
