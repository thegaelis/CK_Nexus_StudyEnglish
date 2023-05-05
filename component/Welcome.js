import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container } from 'native-base'
export default function Welcome({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text} >
        {'Study English \n with Nexus'}
        </Text>
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('Login')} style={styles.b}>Login</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly'
    },
    text: {
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button:{
        width: 'auto',
        alignItems: 'center'
    },
    b:{
        borderRadius: 10,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:'#4D33B9',
        width:'40%',
        paddingVertical:10,
        textAlign: 'center',
        color: 'white'
    }
})    