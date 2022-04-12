import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Historial } from '../screens/Historial';
import { HistoarialCompras } from '../screens/HistoarialCompras';
import {DetalleCreditoGerente} from '../screens/DetalleCreditoGerente';
import { DetalleContado } from '../screens/DetalleContado';

export type RootStackParams = {
    Historial: undefined, 
    HistoarialCompras: undefined,
    DetalleContado:undefined,
    DetalleCreditoGerente:undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackHistorial = () => {
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

      initialRouteName='Historial'
    >
      <Stack.Screen name="Historial" options={{title:'', headerShown: false}}  component={Historial} />
      <Stack.Screen name="HistoarialCompras" options={{title:'HISTORIAL DE COMPRAS'}} component={HistoarialCompras} />
      <Stack.Screen name="DetalleContado" options={{title:'COMPRA DE CONTADO'}} component={DetalleContado} />
      <Stack.Screen name="DetalleCreditoGerente" options={{title:'COMPRA A CRÈDITO'}} component={DetalleCreditoGerente} />
    </Stack.Navigator>
  );
}