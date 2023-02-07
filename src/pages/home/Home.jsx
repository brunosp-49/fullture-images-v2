import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./HomeStyle";

export function Home({ navigation }){
    const [input, setInput] = useState('')

    const onSearch = () =>{
        navigation.navigate("Search", {
            text: input
        })
    }

    const logOut = async () =>{
        await AsyncStorage.removeItem("isAuth")
        navigation.navigate("Login")
    }

    return(
        <SafeAreaView style={style.container}>
            <Image source={require('../../../assets/logo.png')} style={style.image}/>
            <TextInput
            style={style.input}
            value={input}
            onChangeText={(e)=>setInput(e)}
            placeholder="Procurar Imagens"
            />
            <TouchableOpacity style={style.button} onPress={()=> onSearch()}>
                <Text>Buscar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}