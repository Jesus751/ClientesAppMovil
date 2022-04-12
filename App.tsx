import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigatorLoginRegister } from './src/navigator/StackNavigatorLoginRegister';
import { AuthProvider } from './src/context/AuthContext';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  
const AppState = ({children} : any) => {
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )

}
const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <StackNavigatorLoginRegister />
            </AppState>
        </NavigationContainer>
    );
};

export default App;
