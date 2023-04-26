import { StyleSheet, Text, View, ScrollView,TouchableOpacity,FlatList} from 'react-native'
import React from 'react'
import Word from './Word'
import { useRoute } from '@react-navigation/native';



export default function Words({navigation}) {
  const route = useRoute();
  const { words, questions} = route.params.data;
  
  const Render=({item})=>{
    return(
      <Word picture={item.picture} english={item.english} vietsub={item.vietsub} />
    );
  }
  return (
    <>
      <View style={styles.container}>
        <FlatList 
          numColumns={2}
          data={words}
          renderItem={Render}
          keyExtractor={(item)=>item.english.toString()}
          scrollEnabled={true}
          height={'100%'}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('Test',[questions])} style={styles.b}>TEST</Text>
      </TouchableOpacity>
      </>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'space-evenly',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    button:{
      width: '100%',
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    b:{
        fontSize: 20,
        fontWeight: 'bold',
        width: '15%',
        backgroundColor:'#4D33B9',
        width:'40%',
        paddingVertical:10,
        textAlign: 'center',
        color: 'white'
    }
})