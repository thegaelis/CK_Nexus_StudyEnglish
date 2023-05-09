import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList,Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase,ref,update,onValue} from "firebase/database";
import {app} from './Firebasecg.js';

export default function Test({navigation}) {
    const route = useRoute();
    const {name,questions,Email} = route.params.data;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    const [score, setScore] = useState(0);
    const [userData, setUserData] = useState(null);
    const [userScore, setUserScore] = useState(0);

    const handleAnswer = (answer) => {
      setSelectedAnswer(answer);
    };
  
    const handleNextQuestion = () => {
      if (selectedAnswer != null) {
        if (questions[currentQuestion].answers[selectedAnswer-1].correct) {
          setScore(score + 1);
        }
        setSelectedAnswer(null);
        setCurrentQuestion(currentQuestion + 1);
      }
      else{
        Alert.alert(
            'Test Alert',
            'You must select an answer',
            [{text: 'OK'}],
            { cancelable: false }
          );
      }
    };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={[styles.answer, selectedAnswer === item.id ? styles.selectedAnswer : null]}
        onPress={() => handleAnswer(item.id)}>
        <Text>{item.text}</Text>
      </TouchableOpacity>
    );
    
    console.log(name.split(' ')[0]);
    const home=()=>{
      const db = getDatabase(app)
      let Name=name.split(' ')[0];
      const Ref_score = ref(db, 'score/' + Email);
      const Ref_score_2 = ref(db, 'score/' + Email+'/'+Name);
      const Ref_person = ref(db, 'person/' + Email);
      onValue(Ref_person, (snapshot) => {
        const data = snapshot.val();
        setUserData(data); 
      });
      onValue(Ref_score_2, (snapshot) => {
        const data = snapshot.val();
        setUserScore(data); 
      });
      
      if(score>=8 && userScore<8){
        update(Ref_person,{
          level:userData?.level+1,
        })
      }
      if(score>userScore){
        update(Ref_score,{
          [Name]: score,
        })
      }
      navigation.navigate('Home',{Email})
    }
  
    return (
      <View style={styles.container}>
        {currentQuestion < questions.length ? (
          <>
            <Text style={styles.banner}>Question {questions[currentQuestion].id} </Text>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
            <FlatList
              data={questions[currentQuestion].answers}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              extraData={selectedAnswer}
            /> 
            {(currentQuestion < (questions.length -1)) ? 
            (
              <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
                <Text>Next</Text>
              </TouchableOpacity>
            )
            :
            (
              <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
                <Text>Finish</Text>
              </TouchableOpacity>
            )
            } 
          </>
        ) : (
          <>
            <Text style={styles.result}>You scored {score} out of {questions.length}!</Text>
            <TouchableOpacity style={styles.button_2} onPress={()=>{setCurrentQuestion(0);setScore(0);}} >
              <Text>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => home()}>
              <Text>Home</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        marginTop:50,
    },
    banner:{
      margin:20,
      fontSize: 20,
      fontWeight: 'bold',
      alignSelf:'center',
    },
    question: {
        margin:20,
        fontSize: 20,
        marginVertical: 20,
    },
    answer: {
        margin:20,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 20,
        marginVertical: 10,
    },
    selectedAnswer: {
        backgroundColor: '#b3d9ff',
    },
    button:{
        height: 'auto',
        width:'auto',
        borderRadius:15,
        margin:20,
        marginBottom:150,
        alignItems:'center',
        backgroundColor:'white',
        padding:20,

    },
    button_2:{
      height: 'auto',
      width:'auto',
      borderRadius:15,
      margin:20,
      marginBottom:10,
      alignItems:'center',
      backgroundColor:'white',
      padding:20,
    },
    result: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:200,
    },
})