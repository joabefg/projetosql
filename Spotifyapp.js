import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function Spotify() {
  return (
    <ScrollView style={ estilo.container }>
    <Image style={estilo.album}
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReASwgz8nhq078zh60MSp-zLOOfI4E1RNCRJ2eSFYzeg&s=10' }} />
    <Text style={ estilo.musica }> Mônaco Freestyle </Text>
    <Text style={ estilo.artista }> Veigh </Text>

    <View style={ estilo.controles }>
          <Ionicons name="shuffle" size={24} color="white" />
          <Ionicons name="play-skip-back" size={24} color="white" />
          <Ionicons name="play" size={32} color="white" />
          <Ionicons name="play-skip-forward" size={24} color="white" />
          <Ionicons name="repeat" size={24} color="white" />
        </View>
    </ScrollView>
    );
}
const estilo = StyleSheet.create({
  container: {
    backgroundColor: '#25262a',
    flex: 1,
    alignItems: 'center'

  },
  album: { 
    margin: 20,
    width: 200,
  height: 200 },
  musica: {
    color: 'white',
    fontSize: 18
  },
  artista: {
    color: '#aaa',
    fontSize: 18
  },
  controles: {
    flexDirection: "row"
  }
}); 