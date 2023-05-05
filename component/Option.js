import { StyleSheet, Text, View ,Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Option(props) {
        return (
            <View>
                <Text>
                    This is the Option
                </Text>
            </View>
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