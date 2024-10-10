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
import Vagas from '../pages/Vagas';
import Vaga from '../pages/Vaga';
import Culturas from '../pages/Culturas';
import Chats from '../pages/Chats';
import Chat from '../pages/Chat';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='CompletarCurriculo'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="Choice" component={Choice} options={{ headerShown: false }}/>
      <Stack.Screen name="SetupPass" component={SetupPass} options={{ headerShown: false }}/>
      
      <Stack.Screen name="CompletarCurriculo" component={CompletarCurriculo} options={{ headerShown: false }}/>
      
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>

      <Stack.Screen name="Vagas" component={Vagas} options={{ headerShown: false }}/>

      <Stack.Screen name="Vaga" component={Vaga} options={{ headerShown: false }}/>

      <Stack.Screen name="Culturas" component={Culturas} options={{ headerShown: false }}/>

      <Stack.Screen name="Chats" component={Chats} options={{ headerShown: false }}/>

      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>

    </Stack.Navigator>
  );
}

export default Navigation;
