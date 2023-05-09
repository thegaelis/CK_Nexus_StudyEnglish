import { StyleSheet, Text, View ,Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React,{useEffect,useState} from 'react';
import { getAuth} from "firebase/auth";
import {app} from './Firebasecg.js';
import { getDatabase,ref,onValue} from "firebase/database";
export default function Lesson(props) {
        const [score, setScore] = useState(0);
        const user = getAuth(app).currentUser;
        const email=user.email.split("@")[0];
        useEffect(() => {
          const db = getDatabase(app);
          const starCountRef = ref(db, 'score/' + email+'/'+props.name.split(' ')[0]);
          onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              setScore(data);
          });
        }, [email]);
        return (
            // <View style = {styles.container}>
            //   <Image style={styles.picture} source={props.picture} />
            //   <Text style={styles.name} onPress={props.press}>{props.name}</Text>
            // </View> 
            // If not completed, then block the user from touching
            <TouchableWithoutFeedback>
              <View style = {styles.container}>
                <Text style={styles.name} onPress={props.press}>{props.name}</Text>
                <Image style={styles.picture} source={props.picture} />
                <Text style={styles.status}>{parseInt(score)<8 ?("Not completed"):("Completed")}</Text>
                <Text style={styles.score}>{score}/10 at this lesson</Text>
                <TouchableOpacity style={styles.button}>
                  <Text onPress={props.press} style={styles.b}>View Lesson</Text>
                </TouchableOpacity>
              </View>
          </TouchableWithoutFeedback>
        );
    
}

const styles = StyleSheet.create({
    container:{
      dipslay: 'flex',
      flexDirection: 'column',
      height:'auto',
      width: '85%',
      flexBasis:'40%',     
      marginTop:40,
      marginHorizontal:20,
      borderRadius:15,
      backgroundColor: "#FFFFFF",
    },
    name:{
      fontSize:30,
      fontWeight:'bold',
      margin:10,
      color:'red',
    },
    picture:{
      alignSelf:'center',
      width:100,
      height:100,
    },
    status:{
      margin:10,
      fontSize:20,
      fontWeight:'bold',
      margin:10,
      color:'#000000',
    },
    score:{
      margin:10,
      fontSize:20,
      margin:10,
      color:'#000000',
    },
    button:{
      width: 'auto',

    },
    b:{
      margin:10,
      fontSize: 15,
      fontWeight: 'bold',
      width: '15%',
      backgroundColor:'#43bc43',
      width:'40%',
      paddingVertical:10,
      textAlign: 'center',
      color: 'white',
      borderRadius:15
    }

})