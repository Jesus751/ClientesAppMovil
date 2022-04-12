import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Puntos } from '../screens/Puntos';
import { DetallePuntos } from '../screens/DetallePuntos';

export type RootStackParams = {
    Puntos: undefined, 
    DetallePuntos: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackPuntos = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'trasparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}

      initialRouteName='Puntos'
    >
      <Stack.Screen name="Puntos" options={{title:'', headerShown: false}}   component={Puntos} />
      <Stack.Screen name="DetallePuntos" options={{title:'DETALLE PUNTOS'}} component={DetallePuntos} />
    </Stack.Navigator>
  );
}