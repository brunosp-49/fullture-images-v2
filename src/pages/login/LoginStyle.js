import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#ffffff",
        paddingVertical: 10
    },
    text: {
        alignSelf: "center",
        fontSize: 18
    },
    textTitle: {
        alignSelf: "center",
        fontSize: 22,
        marginBottom: 15
    },
    input:{
        borderColor: "#d0d0d0",
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: "80%",
        paddingHorizontal: 10,
        marginVertical: 10
    },
    button:{
        backgroundColor: "#e8e8e8",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 40,
        borderRadius: 5,
        marginVertical: 10
    },
    login:{
        marginTop: 10,
        color: "blue"
    }
})