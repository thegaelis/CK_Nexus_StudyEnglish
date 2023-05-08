import { StyleSheet, Text, View,TextInput,ImageBackground} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function Register({ navigation }) {
  return (
    <ImageBackground source={require('../assets/background.png')}>
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.banner}>Join us to study English</Text>
        <View style={styles.register}>
            <Text style={styles.text}>Username</Text>
            <TextInput style={styles.input} type="username" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} type="name" autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.register}>
            <Text style={styles.text}>Re-enter Password</Text>
            <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
        </View>
        <View>
            <TouchableOpacity style={styles.button}>
                <Text onPress={() => navigation.navigate('Login')} style={styles.b}>Register</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        left:0,
        display:'flex',
        top:160,
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      },
    form: {
          display:'flex',
          justifyContent: 'center',
      },
    register: {
        flexDirection: 'column',
        justifyContent: 'center',
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
    banner: {
        color:'white',
        marginLeft:20,
        fontSize:30,
        fontWeight:'bold',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    button:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
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
    }
})    