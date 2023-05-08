import { StyleSheet, Text, View,TextInput, ImageBackground} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function Login({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.png')}>
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.banner}>Keep up learning English</Text>
        <View style={styles.login}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.input} type="username" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.login}>
            <Text style={styles.text}>Pass</Text>
            <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text onPress={() => navigation.navigate('Home')} style={styles.b}>Login</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      left:0,
      display:'flex',
      top:70,
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
    form: {
        display:'flex',
        justifyContent: 'center',
    },
    login: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        marginVertical: 10
    },
    input: {
        padding:10,
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginLeft:20,
        marginRight:20,
        width:'90%',
        backgroundColor:'white',
    },
    text: {
        color:'white',
        marginLeft:20,
        marginBottom:10,
        fontSize: 20,
        fontWeight: 'bold',
    },
    button:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    b:{
        borderRadius:15,
        fontSize: 20,
        fontWeight: 'bold',
        width: '15%',
        backgroundColor:'white',
        width:'40%',
        paddingVertical:10,
        textAlign: 'center',
        color: 'black'
    },
    banner: {
      color:'white',
      marginLeft:20,
      fontSize:30,
      fontWeight:'bold',
      justifyContent: 'center',
      alignItems: 'center'
  },
})    