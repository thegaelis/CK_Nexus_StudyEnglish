import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image,Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './component/Home.js';
import Login from './component/Login.js';
import Words from './component/Words.js';
import Test from './component/Test.js';
import Welcome from './component/Welcome.js';
import User from './component/User.js';
import Option from './component/Option.js';
import Register from './component/Register.js'
import About from'./component/About.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Words" component={Words} />
        <Stack.Screen name="Test" component={Test} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="About" component={About}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;


const styles = StyleSheet.create({
 
  
});