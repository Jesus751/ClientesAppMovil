import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";

export const  CreditosList = ({ item }) => {
    const {id, nombre, fecha} = item
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                <TouchableOpacity  onPress={() => navigation.navigate('DetalleCredito')}>
                    <View style={styles.datos}>
                        <Text style={styles.primario}>Nombre:</Text>
                        <Text style={styles.txtnombre}>{item.nombre}</Text>
                        <Text style={styles.primario}>Fecha:</Text>
                        <Text style={styles.txtfecha}>{item.fecha}</Text>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({

    containerList:{
        backgroundColor:'#c9eff9',
        padding:7,
        borderBottomEndRadius:7,
        width:'100%',
    },
    datos:{
        flexDirection:'row',
    },
    txtnombre:{
        fontSize:14,
        color:'black',
        paddingLeft:2,
    },
    txtfecha:{
        fontSize:14,
        color:'black',
        paddingLeft:2,
    },
    primario:{
        fontSize:14,
        color:'#2B78E4',
        paddingLeft:2,
    },
});