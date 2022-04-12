import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const  HistorialList = ({ item }) => {
    const {id,image,nombre} = item 
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                <TouchableOpacity onPress={() => navigation.navigate('HistoarialCompras')}>
                    <View style={styles.datos}>
                        <View style={styles.conatinerimage}>
                            <Image style={styles.image} source={item.image}/>
                        </View>
                        <View style={styles.containerdatos}>
                            <Text style={styles.txtNombre}>{item.nombre}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    );
}

const styles = StyleSheet.create({

    containerList:{
        backgroundColor:'#c9eff9',
        padding:2,
        borderBottomEndRadius:7,
        width:'100%',
    },
    datos:{
        flexDirection:'row',
    },
    containerdatos:{
        height:'100%',
        width:'60%',
    },
    txtNombre:{
        fontSize:16,
        color:'black',
        paddingTop:25,
    },
    conatinerimage:{
        height:'100%',
        width:'40%',
    },
    image:{
        justifyContent:'center',
        width:'57%',
        height: 80,
    },

});