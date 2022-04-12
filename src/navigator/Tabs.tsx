/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles, colores } from '../theme/appTheme';
import {  Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Compras } from '../screens/Compras';
import { StackCompras } from './StackCompras';
import { StackCreditos } from './StackCreditos';
import { StackPuntos } from './StackPuntos';
import { TopTabCotizaciones } from './TopTabCotizaciones';
import { StackCursos } from './StackCursos';

export const Tabs = () => {

  return Platform.OS === 'ios'
          ? <TabsIOS/>
          : <TabsAndroid/>
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () =>{
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={({route}) =>({
        tabBarIcon: ({color, focused}) =>{
          let iconName: string = '';
          switch(route.name) {
            case 'StackCompras':
              iconName = 'cart-outline'
            break;
            case 'StackCreditos':
              iconName= 'card-outline'
            break;
            case 'StackPuntos':
              iconName= 'ellipsis-horizontal-outline'
            break;
            case 'TopTabCotizaciones':
              iconName= 'calculator-outline'
            break;
            case 'StackCursos':
              iconName = 'play-circle-outline'
              break;
          }
          return <Icon name={iconName} size={25} color={'black'} />
        }
      })}
    >
      <BottomTabAndroid.Screen  name="StackCompras" options={{title:'COMPRAS'}} component={StackCompras}/>
      <BottomTabAndroid.Screen name="StackCreditos" options={{title:'CRÉDITOS'}} component={StackCreditos}/>
      <BottomTabAndroid.Screen name="StackPuntos" options={{title:'PUNTOS'}}component={StackPuntos} />
      <BottomTabAndroid.Screen name="TopTabCotizaciones" options={{title:'COTIZACIONES'}}component={TopTabCotizaciones} />
      <BottomTabAndroid.Screen name="StackCursos" options={{title:'CURSOS'}} component={StackCursos} />
    </BottomTabAndroid.Navigator>
  );
}


const BottonTabIOS = createBottomTabNavigator();

const  TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
       sceneContainerStyle= {{
         backgroundColor: 'white',
       }}
       
       screenOptions={({route}) =>({
         tabBarActiveTintColor: colores.primary,
         tabBarStyle: {
          shadowColor: 'trasparent',
          elevation: 0,
          },
         headerStyle: {
          borderTopWidth: 0,
          elevation: 0,
         },
         tabBarLabelStyle:{
           fontSize: 15,
         },
         tabBarIcon: ({color, focused, size}) =>{
           let iconName: string = '';
           switch(route.name) {
             case 'StackCompras':
               iconName= 'cart-outline'
             break;
             case 'StackCreditos':
               iconName= 'card-outline'
             break;
             case 'StackPuntos':
               iconName= 'ellipsis-horizontal-outline'
             break;
             case 'TopTabCotizaciones':
              iconName= 'calculator-outline'
            break;
            case 'StackCursos':
              iconName = 'play-circle-outline'
              break;
           }
           return <Icon name={iconName} size={25} color={'black'} />
         }
       })}

    >
      <BottonTabIOS.Screen  name="Compras" options={{title:'COMPRAS'}} component={Compras}/>
      <BottonTabIOS.Screen name="StackCreditos" options={{title:'CRÉDITOS'}} component={StackCreditos}/>
      <BottonTabIOS.Screen name="StackPuntos"options={{title:'PUNTOS'}}component={StackPuntos} />
      <BottomTabAndroid.Screen name="TopTabCotizaciones"options={{title:'COTIZACIONES'}}component={TopTabCotizaciones} />
      <BottomTabAndroid.Screen name="StackCursos"options={{title:'CURSOS'}}component={StackCursos} />
    </BottonTabIOS.Navigator>
  );
}