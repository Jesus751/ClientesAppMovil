import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles, colores } from '../theme/appTheme';
import {  Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackHistorial } from './StackHistorial';
import {Solicitudes} from '../screens/Solicitudes';
import {Graficas} from '../screens/Graficas';

export const TabsAdministrador = () => {

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
            case 'StackHistorial':
              iconName = 'document-text-outline'
            break;
            case 'Solicitudes':
              iconName= 'people-outline'
            break;
            case 'Graficas':
              iconName= 'trending-up-outline'
            break;
          }
          return <Icon name={iconName} size={25} color={'black'} />
        }
      })}
    >
      <BottomTabAndroid.Screen  name="StackHistorial" options={{title:'HISTORIAL'}} component={StackHistorial}/>
      <BottomTabAndroid.Screen name="Solicitudes" options={{title:'SOLICITUDES'}} component={Solicitudes}/>
      <BottomTabAndroid.Screen name="Graficas" options={{title:'GRAFICAS'}}component={Graficas} />
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
             case 'StackHistorial':
               iconName= 'document-text-outline'
             break;
             case 'Solicitudes':
               iconName= 'people-outline'
             break;
             case 'Graficas':
               iconName= 'trending-up-outline'
             break;
           }
           return <Icon name={iconName} size={25} color={'black'} />
         }
       })}

    >
      <BottonTabIOS.Screen  name="StackHistorial" options={{title:'HISTORIAL'}} component={StackHistorial}/>
      <BottonTabIOS.Screen name="Solicitudes" options={{title:'SOLICITUDES'}} component={Solicitudes}/>
      <BottonTabIOS.Screen name="Graficas"options={{title:'GRAFICAS'}}component={Graficas} />
    </BottonTabIOS.Navigator>
  );
}