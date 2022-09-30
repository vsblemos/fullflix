import { StyleSheet,Text,View } from "react-native";

export function Home(){
    return(
        <View style={style.container}>
            <Text style={style.title}>FULLFLIX</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:48,
        color:"red",
    }

})
