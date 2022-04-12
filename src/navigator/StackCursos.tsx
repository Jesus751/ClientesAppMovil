import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cursos } from '../screens/Cursos';
import { DetalleCurso } from '../screens/DetalleCurso';

export type RootStackParams = {
    Cursos: undefined, 
    DetalleCurso: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

export const  StackCursos = () => {
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

      initialRouteName='Cursos'
    >
      <Stack.Screen name="Cursos" options={{title:'', headerShown: false}}  component={Cursos} />
      <Stack.Screen name="DetalleCurso" options={{title:'DETALLE CURSO'}} component={DetalleCurso} />
    </Stack.Navigator>
  );
}