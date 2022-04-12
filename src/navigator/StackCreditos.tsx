import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Creditos } from '../screens/Creditos';
import { DetalleCredito } from '../screens/DetalleCredito';

export type RootStackParams = {
    Creditos: undefined, 
    DetalleCredito: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackCreditos = () => {
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

      initialRouteName='Creditos'
    >
      <Stack.Screen name="Creditos" options={{title:'', headerShown: false}}  component={Creditos} />
      <Stack.Screen name="DetalleCredito" options={{title:'DETALLE CRÉDITO'}} component={DetalleCredito} />
    </Stack.Navigator>
  );
}