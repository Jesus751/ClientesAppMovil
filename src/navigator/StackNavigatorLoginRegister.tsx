import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { MenuLateral } from './MenuLateral';
import { MenuLateralAdministrador } from './MenuLateralAdministrador';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';

export type RootStackParams = {
    Login: undefined,
    Registrarse: undefined,
    MenuLateral:undefined,
    MenuLateralAdministrador:undefined,
  }
const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigatorLoginRegister = () => {

  const {status} = useContext(AuthContext)

  if (status ==='checking') return <LoadingScreen />

  const {user} = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0,
          shadowColor: 'trasparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        }
      }}

      initialRouteName="Login"
    >
      {
        (status !== 'autheticated') 
          ? (
            <>
              <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
              <Stack.Screen name="Registrarse" options={{headerShown: false}} component={Register} /> 
            </>
          )
          :(
            (user?.rol === 'ADMIN_ROLE') 

            ? (
              <>
                 <Stack.Screen name="MenuLateralAdministrador" options={{headerShown: false}} component={MenuLateralAdministrador} />
              </>  
            )
            :(
              <>
                 <Stack.Screen name="MenuLateral" options={{headerShown: false}} component={MenuLateral} /> 
            </>
            )

          )
      }
    </Stack.Navigator>
  );
}