/* eslint-disable prettier/prettier */
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Carrito } from '../screens/Carrito';

import { StackCotizaciones } from './StackCotizaciones';
const Tab = createMaterialTopTabNavigator();

export const  TopTabCotizaciones = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StackCotizaciones" options={{title:'CATÁLAGO DE PRODUCTOS'}} component={StackCotizaciones} />
      <Tab.Screen name="Carrito" options={{title:'COTIZACIONES'}} component={Carrito} />
    </Tab.Navigator>
  );
}