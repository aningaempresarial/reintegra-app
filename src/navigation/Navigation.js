import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../pages/Start';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Splash from '../pages/Splash';
import Choice from '../pages/Choice';
import SetupPass from '../pages/SetupPass';
import CompletarCurriculo from '../pages/CompletarCurriculo';
import CompletarCurriculoParteDois from '../pages/CompletarCurriculoParteDois';
import Home from '../pages/Home';
import Vagas from '../pages/Vagas';
import Vaga from '../pages/Vaga';
import Culturas from '../pages/Culturas';
import Chats from '../pages/Chats';
import Chat from '../pages/Chat';
import Configuracoes from '../pages/Configuracoes';
import EditarPerfil from '../pages/configs/EditarPerfil';
import Notificacoes from '../pages/configs/Notificacoes';
import Acessibilidade from '../pages/configs/Acessibilidade';
import SegurancaPermissoes from '../pages/configs/SegurancaPermissoes';
import CompartilharPerfil from '../pages/configs/CompartilharPerfil';
import Sobre from '../pages/configs/Sobre';
import AjudaSuporte from '../pages/configs/AjudaSuporte';
import RelatarProblema from '../pages/configs/RelatarProblema';
import TermosPoliticas from '../pages/configs/TermosPoliticas';
import Welcome from '../pages/Welcome';
import NoAccountExplicacao from '../pages/NoAccountExplicacao';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator initialRouteName='Start'>
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="NoAccountExplicacao" component={NoAccountExplicacao} options={{ headerShown: false }}/>
      <Stack.Screen name="Choice" component={Choice} options={{ headerShown: false }}/>
      <Stack.Screen name="SetupPass" component={SetupPass} options={{ headerShown: false }}/>
      
      <Stack.Screen name="CompletarCurriculo" component={CompletarCurriculo} options={{ headerShown: false }}/>
      <Stack.Screen name="CompletarCurriculoParteDois" component={CompletarCurriculoParteDois} options={{ headerShown: false }}/>
      
      <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ headerShown: false }}/>
      <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{ headerShown: false }}/>
      <Stack.Screen name="Notificacoes" component={Notificacoes} options={{ headerShown: false }}/>
      <Stack.Screen name="Acessibilidade" component={Acessibilidade} options={{ headerShown: false }}/>
      <Stack.Screen name="SegurancaPermissoes" component={SegurancaPermissoes} options={{ headerShown: false }}/>
      <Stack.Screen name="CompartilharPerfil" component={CompartilharPerfil} options={{ headerShown: false }}/>
      <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }}/>
      <Stack.Screen name="AjudaSuporte" component={AjudaSuporte} options={{ headerShown: false }}/>
      <Stack.Screen name="RelatarProblema" component={RelatarProblema} options={{ headerShown: false }}/>
      <Stack.Screen name="TermosPoliticas" component={TermosPoliticas} options={{ headerShown: false }}/>

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
