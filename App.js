import React from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import TelaInicial from './Componets/TelaInicial/index.js';
import TelaConsole from './Componets/TelaConsole/index.js';
import TelaJogos from './Componets/TelaJogos/index.js';
import TelaNuvem from './Componets/TelaNuvem/index.js';

const Stack = createStackNavigator();
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen name="TelaInicial" component={TelaInicial} />
  <Stack.Screen name="Consoles" component={TelaConsole} />
  <Stack.Screen name="Jogos" component={TelaJogos} />
  <Stack.Screen name="Nuvem" component={TelaNuvem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
