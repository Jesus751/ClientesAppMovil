import React, { useContext, useEffect } from "react";
import {
    View,
    KeyboardAvoidingView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Keyboard,
    Alert,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { useForm } from "../hooks/useForm";
import { styles } from "../theme/register";
import { StackScreenProps } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { AuthContext } from '../context/AuthContext';



interface Props extends StackScreenProps<any, any>{}

export const Register = ({navigation}: Props) => { 

    const {singUp, errorMessage, removeError} = useContext(AuthContext)

    const {name, direccion, telefono, password,form, onChange} =  useForm({
        name:'',
        direccion:'',
        telefono:'',
        password: '',
    });
    
    useEffect(() => {
        if(errorMessage.length === 0)return;

        Alert.alert('Registro  Incorrecto',
        errorMessage,
        [
            {
                text: 'Ok',
                onPress: removeError
            }
        ]
        );
    }, [errorMessage])
    const onRegister = ()=> {
        console.log({name,direccion,telefono,password});
        Keyboard.dismiss();
        singUp({
            nombre: name,
            direccion: direccion,
            telefono: telefono,
            password: password,
        })
    }
    return(
        <>
    <KeyboardAvoidingView style={styles.background} behavior={(Platform.OS==='ios')? 'padding':'height'}>

        <View  style={styles.container}>
            <Text style={styles.containerTextParrafo}>Ingresa Tus Datos</Text>

            <Text style={{marginTop:15, color:'black', fontWeight:'bold',}}>Nombre Completo</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            maxLength={50}
            autoCorrect={false}
            onChangeText={(value) => onChange(value,'name')}
            value={name}
            onSubmitEditing={onRegister}

            />
            <Text style={{marginTop:15, color:'black', fontWeight:'bold',}}>Dirección</Text>
            <TextInput
            style={styles.input}
            placeholder="Dirección"
            maxLength={155}
            autoCorrect={false}
            onChangeText={(value) => onChange(value,'direccion')}
            value={direccion}
            onSubmitEditing={onRegister}
            />
            <Text style={{marginTop:15, color:'black', fontWeight:'bold',}}>Teléfono</Text>
            <TextInput
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Teléfono"
            maxLength={10}
            autoCorrect={false}
            onChangeText={(value) => onChange(value,'telefono')}
            value={telefono}
            onSubmitEditing={onRegister}
            />
            <Text style={{marginTop:15, color:'black', fontWeight:'bold',}}>Password</Text>
            <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="******"
            placeholderTextColor="rgba(255,255,255,0.4)"
            maxLength={20}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => onChange(value,'password')}
            value={password}
            onSubmitEditing={onRegister}
            />
            <TouchableOpacity style={styles.btnSubmit}
                onPress={onRegister}
            >
            <Icon name="save-sharp" size={22} color="white" />
                <Text style={styles.btnSubmitText}>
                    Crear cuenta
                </Text>
            </TouchableOpacity >

            <TouchableOpacity style={styles.buttonReturn}
                onPress={() => navigation.replace('Login')}
            >
                <Text style={styles.textbtn}>Login</Text>
            </TouchableOpacity >
        </View>

    </KeyboardAvoidingView>
    </>
    )
}