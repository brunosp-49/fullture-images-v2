import { useState } from "react";
import { View } from "react-native";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firebaseConfig } from "../../assets/Auth";


 export function Register({ navigation }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const authenticator = async () =>{
        const response = []
    }

    const onRegister = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((response)=>{
            console.log(response)
            navigation.navigate('Login')
        }).catch((err) => {
            console.log(err)
        })
    }


    return(
        <View></View>
    )
 }