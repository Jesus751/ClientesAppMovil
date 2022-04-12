import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetalleCompra } from '../screens/DetalleCompra';
import { Compras } from '../screens/Compras';
import { DetalleProducto } from '../screens/DetalleProducto';

export type RootStackParams = {
  Compras: undefined, 
  DetalleCompra: undefined,
  DetalleProducto: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackCompras = () => {
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

      initialRouteName="Compras">
      <Stack.Screen
        name="Compras"
        options={{title: '', headerShown: false}}
        component={Compras} 
      />
      <Stack.Screen
        name="DetalleCompra"
        options={{title: 'DETALLE COMPRA'}}
        component={DetalleCompra}
      />
      <Stack.Screen
        name="DetalleProducto"
        options={{title: 'DETALLE PRODUCTO '}}
        component={DetalleProducto}
      />
    </Stack.Navigator>
  );
}