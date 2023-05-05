import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function Login({ navigation }) {
  return (
    
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.login}>
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} type="password" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.login}>
            <Text style={styles.text}>Pass</Text>
            <TextInput style={styles.input} type="password" autoCapitalize='none'></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('Home')} style={styles.b}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    form: {
        flex:1,
        justifyContent: 'center',
    },
    login: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    input: {
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        marginLeft:10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        width: '15%',
    },
    button:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
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
    }
})    