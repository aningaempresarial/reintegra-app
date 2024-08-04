import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Splash from '../pages/Splash';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Signup'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default Navigation;
