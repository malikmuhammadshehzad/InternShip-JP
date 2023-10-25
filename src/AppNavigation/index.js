import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login, SignUp } from '../screen';
import SingleProduct from '../screen/Product';
 
const  AppNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUP" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="product" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation

 