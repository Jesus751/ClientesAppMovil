import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cotizaciones } from '../screens/Cotizaciones';
import { DetalleCotizacion } from '../screens/DetalleCotizacion';

export type RootStackParams = {
    Cotizaciones: undefined, 
    DetalleCotizacion: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackCotizaciones = () => {
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

      initialRouteName='Cotizaciones'
    >
      <Stack.Screen name="Cotizaciones" options={{title:'', headerShown: false}}   component={Cotizaciones} />
      <Stack.Screen name="DetalleCotizacion" options={{title:'DETALLE PRODUCTO'}} component={DetalleCotizacion} />
    </Stack.Navigator>
  );
}