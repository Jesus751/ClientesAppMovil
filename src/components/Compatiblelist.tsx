import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";

export const  Compatiblelist = ({ item }) => {
    const {id, marca, modelo} = item
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                    <View style={styles.datos}>
                        <Text style={styles.primario}>Marca:</Text>
                        <Text style={styles.txtnombre}>{item.marca}</Text>
                        <Text style={styles.primario}>Modelo:</Text>
                        <Text style={styles.txtfecha}>{item.modelo}</Text>
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