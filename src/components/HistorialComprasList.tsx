import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const  HistorialComprasList = ({ item }) => {
    const {id, tipoCompra, fecha} = item
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                <TouchableOpacity onPress={() => navigation.navigate('DetalleCreditoGerente')}>
                    <View style={styles.datos}>
                        <Text style={styles.primario}>Compra de:</Text>
                        <Text style={styles.txtnombre}>{item.tipoCompra}</Text>
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
        fontSize:16,
        color:'black',
        paddingLeft:5,
    },
    txtfecha:{
        fontSize:16,
        color:'black',
        paddingLeft:5,
    },
    primario:{
        fontSize:16,
        color:'#2B78E4',
        paddingLeft:5, 
    },
});