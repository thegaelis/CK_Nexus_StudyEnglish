import { StyleSheet, Text, View,ScrollView,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Lesson from './Lesson.js'
import {words_relation,words_time,words_weather,words_animal,words_food,words_sport,words_education,words_travel} from '../data/Word.js'
import {questions_relation,questions_time,questions_weather,questions_animal,questions_food,questions_sport,questions_education,questions_travel}from '../data/Question.js';

export default function Home({ navigation }) {
  function click(){
    return navigation.goBack();
  }
  return (
    <ScrollView>
      <View style={styles.container}>
          {/* ÔNg thay ảnh ở trong require nha */}
          <Lesson picture={require('../assets/book.png')} name={'Relationships'} press={()=>navigation.navigate('Words',{data:{words: words_relation,questions: questions_relation}})}/>  
          <Lesson picture={require('../assets/book.png')} name={'Time'} press={()=>navigation.navigate('Words',{data:{words: words_time,questions: questions_time}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Weather'} press={()=>navigation.navigate('Words',{data:{words: words_weather,questions: questions_weather}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Animals and Plants'} press={()=>navigation.navigate('Words',{data:{words: words_animal,questions: questions_animal}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Food and Drinks'} press={()=>navigation.navigate('Words',{data:{words: words_food,questions: questions_food}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Sports and Entertainment'} press={()=>navigation.navigate('Words',{data:{words: words_sport,questions: questions_sport}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Education and Work'} press={()=>navigation.navigate('Words',{data:{words: words_education,questions: questions_education}})}/>
          <Lesson picture={require('../assets/book.png')} name={'Travel and Culture'} press={()=>navigation.navigate('Words',{data:{words: words_travel,questions: questions_travel}})}/>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('User')} style={styles.b}>User</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop:50,
        marginBottom:100,
        flex: 1,
        justifyContent: 'space-evenly',
        flexDirection:'row',
        flexWrap:'wrap',
    },
})