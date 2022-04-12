import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    Text,
    Image,
    TextInput, 
    TouchableOpacity,
    Animated,
    Keyboard,
    Platform,
    Alert,

} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/Login';
import { useForm } from '../hooks/useForm';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<any, any>{};

export const Login = ({ navigation }: Props) => {

    const {singIN, errorMessage, removeError} = useContext(AuthContext);

    const {telefono, password,form, onChange} =  useForm({
        telefono:'',
        password: '',
    });
    useEffect(() => {
        if(errorMessage.length === 0)return;

        Alert.alert('Login incorrecto',
        errorMessage,
        [
            {
                text: 'Ok',
                onPress: removeError
            }
        ]
        );
    }, [errorMessage])
    
    const onLogin = ()=> {
        console.log({telefono,password});
        Keyboard.dismiss();
        singIN({telefono: telefono, password: password });
    }
    
    const [offset] = useState( new Animated.ValueXY({x: 0, y:30}));
    const [opacity] = useState( new Animated.Value(0));
    const [logo] = useState( new Animated.ValueXY({x: 350, y: 100}));

    useEffect(() => {
        Animated.parallel([
             Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 25,
                useNativeDriver: false,
            }),
            Animated.timing(opacity, {
    toValue: 2,
    duration: 300,
    useNativeDriver: false,
}),

        ]).start();

    }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
    <View style={styles.containerLogo}>
        <Animated.Image
        style={{
            width:logo.x,
            height:logo.y,
            justifyContent:'flex-start',
        }}
        source={require('../assets/images/Logo.png')}/>
    </View>
    <Animated.View
     style={[
         styles.container,
         {
             opacity: opacity,
             transform:[
                 {translateY: offset.y},
             ],
         },
      ]}
     >
        <Text style={{ color:'black', fontWeight:'bold',}}>Telefono</Text>
        <TextInput
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="number-pad"
        maxLength={10}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={(value) => onChange(value,'telefono')}
        value={telefono} 
        onSubmitEditing={onLogin}
        />
        <Text style={{ color:'black', fontWeight:'bold',}}>Contraseña</Text>
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
        onSubmitEditing={onLogin}
        />
        <TouchableOpacity style={styles.btnSubmit}
         onPress={onLogin}
        >
            <Text style={styles.btnSubmitText}>
                Iniciar Sesión
            </Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.btnCrearCuenta}
        onPress={() => navigation.replace('Registrarse')}
        >
            <Text style={styles.btnCrearCuentaText}>
                Crear Cuenta
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoogle}>
        <Icon name="logo-google" size={22} color="white" />

            <Text style={styles.btnbtnGoogleText}>
                Inicia Sesión Con Google
            </Text>
        </TouchableOpacity>
    </Animated.View>
    </KeyboardAvoidingView>
);
};
