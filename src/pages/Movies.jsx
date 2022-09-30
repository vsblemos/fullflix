import { useEffect, useState } from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../assets/api/req";

export function Movies(){
  const [movie,setmovie] = useState()
  const poster = "https://image.tmdb.org/t/p/w500"

    async function start(){
       var data = await api.get()
       console.log(data.data.results)
       setmovie(data.data.results)
      }

      useEffect(()=>{
        start()
      },[])

    return(
        <View style={style.container}>
          <View style={style.top_header}>
            <Text style={style.title}>Filmes</Text>
          </View>
          <View style={style.list}>
            <FlatList data={movie} keyExtractor={item=>item.id} renderItem={({item}) =>(
              <TouchableOpacity style={style.movielist}>
                <Image style={style.image} source={{uri:`https://image.tmdb.org/t/p/w500${item.poster_path}`}}/>
                <Text style={style.movietitle}>{item.title}</Text>
              </TouchableOpacity>
            )}/>
          <StatusBar style="auto"/>
          </View>
        </View>
    )
} 

const style = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#000",
     
      
  },
  top_header:{
   
    backgroundColor:"red",
    width:"100%",
    paddingVertical: 20,
    justifyContent:"center",

  },
  title:{
    fontSize:25,
    paddingHorizontal:10,
    fontWeight:"bold"
  },
  image:{
    width:100,
    height:120,
    objectFit:"cover",
    borderRadius:5,

  },
  movielist:{
    marginVertical:5,
    flexDirection:"row",
    backgroundColor:"#0f0f0f",
    borderRadius:5,
  },
  list:{
    flex:1,
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:"#0a0a0a",
  },
  movietitle:{
    flex:1,
    color:"#fff",
    textAlignVertical:"center",
    fontSize:24,
    paddingHorizontal:10,

  }
  

})
