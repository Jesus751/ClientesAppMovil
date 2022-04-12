import React from "react";
import { Text, View, StyleSheet } from 'react-native';

export const  DetalleCreditoGerenteList = ({ item }) => {
    const {id, abono, fecha} = item
    return(
            <View style={styles.containerList}>
                    <View style={styles.datos}>
                        <Text style={styles.primario}>Abonó:$</Text>
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