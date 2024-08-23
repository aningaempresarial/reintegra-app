import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/Start';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Splash from '../pages/Splash';
import Choice from '../pages/Choice';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Start'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Choice" component={Choice} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default Navigation;
