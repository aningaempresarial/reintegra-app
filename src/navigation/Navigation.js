import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/Start';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Splash from '../pages/Splash';
import Choice from '../pages/Choice';
import SetupPass from '../pages/SetupPass';
import CompletarCurriculo from '../pages/CompletarCurriculo';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Start'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Choice" component={Choice} options={{ headerShown: false }}/>
      <Stack.Screen name="SetupPass" component={SetupPass} options={{ headerShown: false }}/>

      
      <Stack.Screen name="CompletarCurriculo" component={CompletarCurriculo} options={{ headerShown: false }}/>
      
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default Navigation;
