import React, { useState } from "react";
import styles from "../styles/Chats";
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
import { Poppins_700Bold, Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import LoadingModal from "../components/LoadingModal";

const Chats = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingModal/>;
  }

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

          <Text style={styles.title}>Chats</Text>

            <View style={styles.listaContatosContainer}>
                <TouchableOpacity style={styles.contatoDiv} onPress={() => navigation.navigate('Chat')}>
                    <View style={styles.imgContatoContainer}>
                        <Image style={styles.imgContato} source={require('../../assets/images/microsoft-photo.jpeg')}/>
                    </View>
                    <View style={styles.infosContatoContainer}>
                        <View style={styles.infosContato}>
                            <Text style={styles.nomeContato}>Microsoft</Text>
                            <Text style={styles.horarioContato}>10:10</Text>
                        </View>
                        <View style={styles.mensagemContatoContainer}>
                            <Text style={styles.mensagemContato}>Não.</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.contatoDiv}>
                    <View style={styles.imgContatoContainer}>
                        <Image style={styles.imgContato} source={require('../../assets/images/oracle-photo.png')}/>
                    </View>
                    <View style={styles.infosContatoContainer}>
                        <View style={styles.infosContato}>
                            <Text style={styles.nomeContato}>Oracle</Text>
                            <Text style={styles.horarioContato}>16:48</Text>
                        </View>
                        <View style={styles.mensagemContatoContainer}>
                            <Text style={styles.mensagemContato}>Bom dia, temos uma proposta...</Text>
                        </View>
                    </View>
                </View>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
