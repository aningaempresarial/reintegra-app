import React, { useEffect, useState } from "react";
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
import { Poppins_700Bold, Poppins_400Regular, useFonts } from "@expo-google-fonts/poppins";
import LoadingModal from "../components/LoadingModal";
import { getItem, setItem } from "../functions/AsyncStorage";
import axios from "axios";
import { API_URL } from "../constraints";

const Chat = ({ route }) => {
  const navigation = useNavigation();


  const { conversa, indice } = route.params || {};
  const [cnv, setCnv] = useState(conversa);

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

  const [mensagem, setMensagem] = useState('');

  async function updateChat() {
    const token = await getItem('token');
    
    axios.get(`${API_URL}/mensagem/mensagens?token=${token}`)
    .then(res => {
      setCnv(res.data[indice])
    })
    .catch(err => {
      console.error(err)
    })
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


      const handleTimer = () => {
        updateChat();
      };
  
      const interval = setInterval(handleTimer, 10000);
  
      return () => clearInterval(interval);
  }, []);

  

  if (!fontsLoaded) {
    return <LoadingModal />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
        <View style={styles.main}>
          <Text style={styles.title}>Conversa com {cnv.nomeUsuario}</Text>

          <ScrollView style={styles.conversaDiv}>
            {cnv.mensagens.map((mensagem, index) => (
              <View
                key={mensagem.idMensagem}
                style={
                  mensagem.usuario != cnv.nomeUsuario 
                    ? styles.textEnviadoDiv
                    : styles.textRecebidoDiv
                }
              >
                {mensagem.usuario == cnv.nomeUsuario && (
                  <Image
                    source={{ uri: `${API_URL}${cnv.fotoPerfil}?t=${timestamp}` }}
                    style={styles.imgMensagem}
                  />
                )}
                
                <View style={mensagem.usuario == cnv.nomeUsuario ? styles.enviadoMensagem : styles.recebidoMensagem}>
                  <Text style={styles.text}>{mensagem.conteudoMensagem}</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputDiv}>
            <TextInput style={styles.input} onChangeText={(text) => setMensagem(text)} value={mensagem} placeholder="Digite uma mensagem" />
            <Icon name={'send-outline'} size={30} style={{
              position: 'absolute',
              right: 10,
              top: 10,
              zIndex: 2
            }} 
            onPress={async () => {

              const token = await getItem('token');

              const formData = new FormData();
              formData.append('token', token);
              formData.append('destinatario', cnv.nomeUsuario);
              formData.append('tipo_mensagem', 'text');
              formData.append('conteudo_mensagem', mensagem);
  
    
              axios.post(`${API_URL}/mensagem/send`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                }
              })
              .then(res => {
                setMensagem('');
                updateChat();
              })
              .catch(err => {
                console.error(err)
              })

            }}
            />
          </View>
        </View>
    </SafeAreaView>
  );
};

export default Chat;
