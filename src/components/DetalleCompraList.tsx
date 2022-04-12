import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const  DetalleCompraList = ({ item }) => {
    const {DESCLIID, IMPTOTALX, DESCRIPCIO, precio} = item
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                <TouchableOpacity  onPress={() => navigation.navigate('DetalleProducto')}>
                    <View style={styles.datos}>
                        <Text style={styles.primario}>Precio:</Text>
                        <Text style={styles.txtnombre}>{item.IMPTOTALX}</Text>
                        <Text style={styles.primario}>Producto:</Text>
                        <Text style={styles.txtfecha}>{item.DESCRIPCIO}</Text>
                        <Text style={styles.primario}>Precio:</Text>
                        <Text style={styles.txtfecha}>{item.precio}</Text>
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