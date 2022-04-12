import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

export const  DetalleCreditoList = ({ item }) => {
    const {id, abono, fecha} = item
    return(
            <View style={styles.containerList}>
                    <View style={styles.datos}>
                        <Icon name="cash-outline" size={20} color="black" />
                        <Text style={styles.primario}>Abonó $</Text>
                        <Text style={styles.txtnombre}>{item.abono}</Text>
                        <Text style={styles.primario}>Fecha:</Text>
                        <Text style={styles.txtfecha}>{item.fecha}</Text>
                    </View>
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