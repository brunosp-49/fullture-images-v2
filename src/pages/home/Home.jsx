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