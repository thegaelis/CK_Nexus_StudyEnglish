import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import React from 'react';


export default function User({ navigation }) {
  return (
    <View>
        <TouchableOpacity style={styles.topContainer} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/back.png')} style={styles.backbanner}></Image>
          <Text style={styles.banner}>
            Account
          </Text>
        </TouchableOpacity>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/user.png')}></Image>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.username}>@username</Text>
        <Text style={styles.userscore}>Score earned: 0 </Text> 
        <Text style={styles.userdateJoined}>Date Joined: 01/01/0001</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Option')} >
        <Text style={styles.option}>Edit Your Account</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.option}>About the App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.option}>Log out</Text>
      </TouchableOpacity>
    </View>
    
  )
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
    alignSelf:'center',
    borderRadius:50,
    // alignContent:'flex-end',
  },
  name:{
    fontWeight:'bold',
    fontSize:25,
    margin:10,
  },
  username:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  userscore:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  userdateJoined:{
    fontWeight:'bold',
    fontSize:20,
    margin:10,
  },
  option:{
    fontSize: 20,
    margin:20,
  },


})