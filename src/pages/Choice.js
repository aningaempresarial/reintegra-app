import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "../styles/Choice";
import { useNavigation } from "@react-navigation/native";

function Choice() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerDiv}>
        <Image
          style={{ width: "80%", resizeMode: "contain" }}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.headerText}>Por favor, selecione uma opção:</Text>
        <View>
          <Pressable style={styles.button1} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Já tenho uma conta</Text>
          </Pressable>
          <Pressable style={styles.button2} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonText}>Sou novo por aqui</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Choice;
