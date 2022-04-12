import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from "react";
import { Usuario, LoginResponse, LoginData, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import ClienteGeo from '../api/ClienteGeo';


type AuthContextProps = {  
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'autheticated' | 'not-authenticated';
    singIN: (loginData: LoginData) => void;
    singUp: (registerData:  RegisterData) => void;
    logOut: () => void;
    removeError: () => void;
    
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage:'',

}


export  const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children} : any) => {
    const [state, dispatch] = useReducer(authReducer, authInicialState);

    useEffect(() => {
        validarToken();
    }, [])

    const validarToken = async () => {
      const token = await  AsyncStorage.getItem('token');
      // no token / no autenticado
      if (!token) return dispatch({type:'notAuthenticated'});
      // hay token 
      const resp = await ClienteGeo.get('/auth');
      if(resp.status !== 200) {
          return dispatch({type:'notAuthenticated'});
      }
      await AsyncStorage.setItem('token', resp.data.token);
      dispatch({
        type:'singUp',
        payload:{
            token: resp.data.token,
            user: resp.data.usuario
        }
        });

    }
    

    const singIN = async ({telefono,password}: LoginData) => {

        try {
            const {data} = await ClienteGeo.post<LoginResponse>('/auth/login', {telefono,password});
            dispatch({
                type:'singUp',
                payload:{
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);

        } catch (error) {
            dispatch({
                type:'addError',
                payload:error.response.data.msg || 'Informacion incorrecta'
            })
        } 
    };
    const singUp = async({nombre, telefono, direccion, password }:  RegisterData) => {

        try {
            const {data} = await ClienteGeo.post<LoginResponse>('/usuarios', {nombre, telefono, direccion, password});
            dispatch({
                type:'singUp',
                payload:{
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);

        } catch (error) {
            dispatch({
                type:'addError',
                payload:error.response.data[0].msg||'Revise Su Informaciòn'
            })
        } 

    };

    const logOut = async() => {
       await AsyncStorage.removeItem('token');
       dispatch({type:'logout'});
    };
    const removeError = () => {
        dispatch({type:'removeError'});
    };
    
    return(
        <AuthContext.Provider value={{
            ...state,
            singIN,
            singUp,
            logOut, 
            removeError,
        }}>
            {children}
        </AuthContext.Provider>

    );

}
