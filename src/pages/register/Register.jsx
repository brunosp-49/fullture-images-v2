import { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firebaseConfig } from "../../assets/Auth";
import { style } from "./RegisterStyle";

export function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticator = async () => {
    const response = [];
  };

  const onRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        Alert.alert("Conta criada com sucesso!");
        navigation.navigate("Login");
      })
      .catch((err) => {
        switch (err.message) {
          case "Firebase: Error (auth/invalid-email).":
            Alert.alert("Email inválido");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            Alert.alert("A senha deve ser maior que 5 caracteres");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            Alert.alert("Esse email já está cadastrado");
            break;
          default:
            Alert.alert(err.message.toString())
        }
      });
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textTitle}>Cadastrar</Text>
      <TextInput
        style={style.input}
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
      />
      <TextInput
        style={style.input}
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={style.button} onPress={() => onRegister()}>
        <Text style={style.text}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToLogin()}>
        <Text style={style.login}>Já é membro? faça seu login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
