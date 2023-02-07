import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../assets/Auth";
import { style } from "./LoginStyle";

export function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authenticator = async () =>{
    const response = await AsyncStorage.getItem("isAuth");
    console.log(response)
    if(response === "true"){
        navigation.navigate("Home")
    }
  }

  useEffect(()=>{
    authenticator()
  },[])

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(async(response) => {
          Alert.alert("Login feito com sucesso!");
          await AsyncStorage.setItem("isAuth", "true");
          navigation.navigate("Home");
      })
      .catch((err) => {
        switch (err.message) {
          case "Firebase: Error (auth/invalid-email).":
            Alert.alert("Email inválido");
            break;
          case "Firebase: Error (auth/user-not-found).":
            Alert.alert("Usuário não encontrado");
            break;
          case "Firebase: Error (auth/wrong-password).":
            Alert.alert("Senha incorreta");
            break;
          default:
            Alert.alert(err.message.toString());
            break;
        }
      });
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.textTitle}>Login</Text>
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
      <TouchableOpacity style={style.button} onPress={() => login()}>
        <Text style={style.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToRegister()}>
        <Text style={style.login}>Ainda não é membro? faça seu cadastro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
