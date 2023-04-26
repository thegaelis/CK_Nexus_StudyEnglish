import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image,Button} from 'react-native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './component/Home.js';
import Login from './component/Login.js';
import Words from './component/Words.js';
import Test from './component/Test.js';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Words" component={Words} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


export default App;


const styles = StyleSheet.create({
 
  
});