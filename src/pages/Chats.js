import React, { useEffect, useState } from "react";
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
import { getItem, setItem } from "../functions/AsyncStorage";
import axios from "axios";
import { API_URL } from "../constraints";

const Chats = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const [fontSize, setFontSize] = useState(null);

  const [timestamp, setTimestamp] = useState(new Date().getTime());

  async function getLastUpdate() {
    const lastupdate = await getItem('lastupdate');
    setTimestamp(lastupdate);
  }


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

      getLastUpdate();
  }, []);


  const [chats, setChats] = useState([])

  async function getChats() {
    const token = await getItem('token');
    
    axios.get(`${API_URL}/mensagem/mensagens?token=${token}`)
    .then(res => {
      setChats(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    getChats();
  }, [])

  if (!fontsLoaded) {
    return <LoadingModal/>;
  }


  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <ScrollView style={{ width: "100%", backgroundColor: "#f5f8ff" }}>
        <View style={styles.main}>
          {/* <View style={styles.searchBarContainer}>
            <View style={styles.searchBarDiv}>
              <TextInput style={styles.searchBar} placeholder="Buscar..." />
            </View>

            <View style={styles.searchIconDiv}>
              <Icon name="search" size={30} />
            </View>
          </View> */}

          <Text style={styles.title}>Chats</Text>

          <View style={styles.listaContatosContainer}>

            {chats.map((chat, i) => (
              <TouchableOpacity key={i} style={styles.contatoDiv} onPress={() => navigation.navigate('Chat', { conversa: chat, indice: i })}>
                <View style={styles.imgContatoContainer}>
                  <Image style={styles.imgContato} source={{ uri: `${API_URL}${chat.fotoPerfil}?t=${timestamp}` }}/>
                </View>
                <View style={styles.infosContatoContainer}>
                    <View style={styles.infosContato}>
                        <Text style={[styles.nomeContato]}>{chat.nomeUsuario}</Text>
                    </View>
                    <View style={styles.mensagemContatoContainer}>
                        <Text style={styles.mensagemContato}>{chat.mensagens[chat.mensagens.length-1].conteudoMensagem}</Text>
                    </View>
                </View>
              </TouchableOpacity>
            ))}

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Chats;
