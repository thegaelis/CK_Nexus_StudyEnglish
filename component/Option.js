import { StyleSheet, Text, View ,Image, TouchableOpacity,TextInput} from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native-gesture-handler';


export default function Option({navigation}) {
        return (
            <View>
              <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('User')}>
                <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
                <Text style={styles.banner}>
                  Edit Your Account
                </Text>
              </TouchableOpacity>
              <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                  <Image style={styles.image} source={require('../assets/user.png')}></Image>
                </View>
                <View style={styles.form}>
                  <Text style={styles.formbanner}>Info</Text>
                  <View style={styles.section}>
                      <Text style={styles.text}>Username</Text>
                      <TextInput style={styles.input} type="username" autoCapitalize='none'></TextInput>
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.text}>Name</Text>
                      <TextInput style={styles.input} type="name" autoCapitalize='none'></TextInput>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.b}>Update Info</Text>
                      </TouchableOpacity>
                  </View>
                  <Text style={styles.formbanner}>Password</Text>
                  <View style={styles.section}>
                      <Text style={styles.text}>Current Password</Text>
                      <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.text}>New Password</Text>
                      <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
                  </View>
                  <View style={styles.section}>
                      <Text style={styles.text}>Re-enter New Password</Text>
                      <TextInput style={styles.input} type="password" autoCapitalize='none' secureTextEntry={true}></TextInput>
                  </View>
                  <View>
                      <TouchableOpacity style={styles.button}>
                          <Text style={styles.b}>Update Password</Text>
                      </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            </View>
        );
    
}

const styles = StyleSheet.create({
  topContainer:{
    display: 'flex',
    flexDirection: 'row',
    paddingBottom:20,
    alignItems:'center',
  },
  banner:{
    marginLeft:20,
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',
  },
  formbanner:{
    marginLeft:20,
    fontSize:30,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backbanner:{
    verticalAlign:'middle',
    marginLeft:20,
    marginTop:50,
  }
  ,
  container:{
    display:'flex',
    marginTop:20,
    marginBottom:20,
    alignItems:'center',
  },
  image:{
    width:100,
    height:100,
    alignSelf:'flex-start',
    borderRadius:50,
    margin:20,
  },
  form: {
    display:'flex',
    justifyContent: 'center',
  },
  section: {
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
    marginLeft:20,
    marginBottom:10,
    fontSize: 15,
  },
  button:{
    width: '100%',
    height: 100,
    justifyContent: 'center',
    marginLeft:20,
    borderRadius:10
  },
  b:{
    borderRadius:15,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor:'#43bc43',
    width:'50%',
    paddingVertical:10,
    textAlign: 'center',
    color: 'white'
  },
  scroll:{
    marginBottom:100,
  },
  
})