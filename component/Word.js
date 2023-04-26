import { StyleSheet, Text, View ,Image,TouchableNativeFeedback} from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Word(props) {
  const [StyleEng, setStyleEng] = useState(styles.ENGLISH_ON);
  const [StyleViet, setStyleViet] = useState(styles.ENGLISH_OFF);

  const press=()=>{
    if(StyleEng===styles.ENGLISH_ON){
      setStyleEng(styles.ENGLISH_OFF);
      setStyleViet(styles.VIETSUB_ON);
    }
    else{
      setStyleEng(styles.ENGLISH_ON);
      setStyleViet(styles.VIETSUB_OFF);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={press}>
        <View style={StyleEng}>
            <Image style={styles.picture} source={props.picture}/>
            <Text onPress={press} style={styles.english}>{props.english}</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={press}>
        <View style={StyleViet}>
          <Text onPress={press} style={styles.vietsub}>{props.vietsub}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  ENGLISH_ON:{
    paddingTop:10,
    width:'100%',
    height:200,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'red',
    borderWidth:1,
  },
  VIETSUB_ON:{
    paddingTop:10,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderColor:'green',
    borderWidth:1,
    height:200,
    fontSize:40,
    fontWeight:'bold',
  },
  ENGLISH_OFF:{
    display:'none',
  },
  VIETSUB_OFF:{
    display:'none',
  },
  vietsub:{
    fontSize:20,
    fontWeight:'bold',
  },
  container:{
    width:'40%',
    marginHorizontal:20,
    marginTop:40,
  },
  picture:{
    width:'100%',
    height:150,
    borderColor:'red',
  },
  english:{
    marginTop:5,
    marginBottom:5,
    color:'red',
  },
})