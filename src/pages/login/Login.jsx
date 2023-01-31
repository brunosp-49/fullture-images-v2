import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { View } from "react-native";
import { auth } from "../../assets/Auth";


 export function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = async() =>{
        await signInWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            navigation.navigate('Home')
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <View></View>
    )
 }