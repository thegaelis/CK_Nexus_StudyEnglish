import { StyleSheet, Text, View,ScrollView,TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Lesson from './Lesson.js'
import {words_relation,words_time,words_weather,words_animal,words_food,words_sport,words_education,words_travel} from '../data/Word.js'
import {questions_relation,questions_time,questions_weather,questions_animal,questions_food,questions_sport,questions_education,questions_travel}from '../data/Question.js';

export default function Home({ navigation }) {
  function click(){
    return navigation.goBack();
  }
  return (
    <View>
      <View style={styles.topContainer}>
        <Text style={styles.greet}>
          Hello, User
        </Text>
        <Text style={styles.score}>
          0
        </Text>
        <TouchableOpacity style={styles.image} onPress={() => navigation.navigate('User')}>
          <Image source={require('../assets/user.png')}></Image>
          </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
            {/* ÔNg thay ảnh ở trong require nha */}
            <Lesson picture={require('../assets/book.png')} name={'Relationships'} press={()=>navigation.navigate('Words',{data:{name:'Relationships',words: words_relation,questions: questions_relation}})}/>  
            <Lesson picture={require('../assets/book.png')} name={'Time'} press={()=>navigation.navigate('Words',{data:{name:'Time',words: words_time,questions: questions_time}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Weather'} press={()=>navigation.navigate('Words',{data:{name:'Weather',words: words_weather,questions: questions_weather}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Animals and Plants'} press={()=>navigation.navigate('Words',{name:'Animal and Plants',data:{words: words_animal,questions: questions_animal}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Food and Drinks'} press={()=>navigation.navigate('Words',{data:{name:'Food and Drinks',words: words_food,questions: questions_food}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Sports and Entertainment'} press={()=>navigation.navigate('Words',{data:{name:'Sports and Entertainment',words: words_sport,questions: questions_sport}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Education and Work'} press={()=>navigation.navigate('Words',{data:{name:'Education and Work',words: words_education,questions: questions_education}})}/>
            <Lesson picture={require('../assets/book.png')} name={'Travel and Culture'} press={()=>navigation.navigate('Words',{data:{name:'Travel and Culture',words: words_travel,questions: questions_travel}})}/>
        </View>
      </ScrollView>
      </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'auto',
        marginLeft:10,
        marginBottom:200,
        flex: 1,
        // justifyContent: 'space-evenly',
        flexDirection:'column',
        flexWrap:'wrap',
    },
    button:{
      width: 'auto',
      alignItems: 'center',
      marginVertical: 10

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
    },
    topContainer:{
      display: 'flex',
      flexDirection: 'row',
      paddingBottom:20,
      alignItems:'center',
    },
    greet:{
      alignSelf:'flex-start',
      marginLeft:20,
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',

    },
    image:{
      marginLeft:'auto',
      marginRight:20,
      alignSelf:'flex-end',
      // alignContent:'flex-end',
    },
    score:{
      marginTop:50,
      fontSize:30,
      marginLeft:140,
      marginRight:10
    },
})