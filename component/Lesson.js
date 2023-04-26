import { StyleSheet, Text, View ,Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Lesson(props) {
        return (
            // <View style = {styles.container}>
            //   <Image style={styles.picture} source={props.picture} />
            //   <Text style={styles.name} onPress={props.press}>{props.name}</Text>
            // </View> 
            <TouchableWithoutFeedback onPress={props.press}>
              <View style = {styles.container}>
                <Image style={styles.picture} source={props.picture} />
                <Text style={styles.name} onPress={props.press}>{props.name}</Text>
              </View>
          </TouchableWithoutFeedback>
        );
    
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'center',
      alignItems:'center',
      height:200,
      borderColor:'red',
      borderWidth:1,
      flexBasis:'40%',     
      marginTop:40,
      marginHorizontal:20,
    },
    name:{
      marginTop:5,
      marginBottom:5,
      color:'red',
    },
    picture:{
      borderRadius:50,
      borderWidth:1,
      width:100,
      height:100,
      borderColor:'red',
    }
})