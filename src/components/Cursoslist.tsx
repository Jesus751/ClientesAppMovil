import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const  Cursoslist = ({ item }) => {
    const {id, nombre} = item
    const navigation = useNavigation();
    
    return(
            <View style={styles.containerList}>
                 <TouchableOpacity  onPress={() => navigation.navigate('DetalleCurso')}>
                    <View style={styles.datos}>
                        <Icon name="play-circle-outline" size={20} color="black" />
                        <Text style={styles.primario}>Curso de:</Text>
                        <Text style={styles.txtnombre}>{item.nombre}</Text>
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
        width:'80%',
    },
    datos:{
        flexDirection:'row',
    },
    txtnombre:{
        fontSize:18,
        color:'black',
        paddingLeft:22,
    },
    primario:{
        fontSize:18,
        color:'#2B78E4',
        paddingLeft:22, 
    },
});