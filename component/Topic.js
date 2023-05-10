import { StyleSheet, Text, View,ScrollView,TouchableOpacity, Image} from 'react-native'
import React,{useEffect,useState}  from 'react'
import { useRoute } from '@react-navigation/native';
import {app} from './Firebasecg.js';
import { getDatabase, ref, onValue} from "firebase/database";


import Lesson from './Lesson.js'
import {words_relation,words_time,words_weather,words_animal,words_food,words_sport,words_education,words_travel} from '../data/Word.js'
import {questions_relation,questions_time,questions_weather,questions_animal,questions_food,questions_sport,questions_education,questions_travel}from '../data/Question.js';


export default function Topic({ navigation }) {
  const [userData, setUserData] = useState(null);
  const route = useRoute();
  const {Email} = route.params;


  function click(){
    return navigation.goBack();
  }

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, 'person/' + Email);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        setUserData(data); 
    });
  }, [Email]);


  
  return (
    <View>
      <View style={styles.topContainer}>
      <TouchableOpacity style={styles.BannerBack} onPress={() => navigation.navigate('Home',{Email})}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            Topic
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.user} onPress={() => navigation.navigate('User',{Email})}>
          <Text style={styles.score}>
          {userData?.level}
          </Text>
          <Image source={require('../assets/user.png')} style={styles.image}></Image>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
            {/* ÔNg thay ảnh ở trong require nha */}
            {userData?.level > 0?
             (<Lesson picture={require('../assets/book.png')} name={'Relationships'} press={()=>navigation.navigate('Words',{data:{name:'Relationships',words: words_relation,questions: questions_relation,Email:Email}})}/>)
            :
             null
            }

            {userData?.level > 1?
             (<Lesson picture={require('../assets/book.png')} name={'Time'} press={()=>navigation.navigate('Words',{data:{name:'Time',words: words_time,questions: questions_time,Email:Email}})}/>             )
            :
             null
            }

            {userData?.level > 2?
             (<Lesson picture={require('../assets/book.png')} name={'Weather'} press={()=>navigation.navigate('Words',{data:{name:'Weather',words: words_weather,questions: questions_weather,Email:Email}})}/>)
            :
             null
            }

            {userData?.level >3 ?
             (<Lesson picture={require('../assets/book.png')} name={'Animals and Plants'} press={()=>navigation.navigate('Words',{data:{name:'Animals and Plants',words: words_animal,questions: questions_animal,Email:Email}})}/>)
            :
             null
            }
            
            {userData?.level >4 ?
            ( <Lesson picture={require('../assets/book.png')} name={'Food and Drinks'} press={()=>navigation.navigate('Words',{data:{name:'Food and Drinks',words: words_food,questions: questions_food,Email:Email}})}/>)
            :
             null
            }

            {userData?.level >5 ?
             (<Lesson picture={require('../assets/book.png')} name={'Sports and Entertainment'} press={()=>navigation.navigate('Words',{data:{name:'Sports and Entertainment',words: words_sport,questions: questions_sport,Email:Email}})}/>)
            :
             null
            }
            {userData?.level >6 ?
             (<Lesson picture={require('../assets/book.png')} name={'Education and Work'} press={()=>navigation.navigate('Words',{data:{name:'Education and Work',words: words_education,questions: questions_education,Email:Email}})}/>)
            :
             null
            }
            {userData?.level > 7?
             ( <Lesson picture={require('../assets/book.png')} name={'Travel and Culture'} press={()=>navigation.navigate('Words',{data:{name:'Travel and Culture',words: words_travel,questions: questions_travel,Email:Email}})}/>)
            :
             null
            }
           

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
    banner:{
      alignSelf:'flex-start',
      marginLeft:20,
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',

    },
    backbanner:{
        marginLeft:10,
        marginTop:50,
    },
    BannerBack:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
    },
    user:{
        dipslay:'flex',
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:20,
    },
    image:{
        marginTop:55,
  
    },
    score:{
        marginTop:50,
        fontSize:30,
        marginLeft:'auto',
        marginRight:10
    },
})