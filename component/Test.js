import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList,Alert} from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function Test({navigation}) {

    const route = useRoute();

    const [questions] = route.params;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    const [score, setScore] = useState(0);

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
            'Hệ thống',
            'Bạn phải chọn 1 đáp án',
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
  
    return (
      <View style={styles.container}>
        {currentQuestion < questions.length ? (
          <>
            <Text style={styles.question}>{questions[currentQuestion].question}</Text>
            <FlatList
              data={questions[currentQuestion].answers}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              extraData={selectedAnswer}
            />
            <TouchableOpacity style={styles.button} onPress={handleNextQuestion}>
              <Text>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.result}>You scored {score} out of {questions.length}!</Text>
            <TouchableOpacity style={styles.button_2} onPress={() => {setCurrentQuestion(0); setScore(0)}}>
              <Text>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
              <Text>Home</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    answer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginVertical: 10,
    },
    selectedAnswer: {
        backgroundColor: '#b3d9ff',
    },
    button:{
        marginBottom:150,
        alignItems:'center',
        backgroundColor:'white',
        padding:40,
    },
    button_2:{
      marginBottom:10,
      alignItems:'center',
      backgroundColor:'white',
      padding:40,
    },
    result: {
        flex:1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop:200,
    },
})