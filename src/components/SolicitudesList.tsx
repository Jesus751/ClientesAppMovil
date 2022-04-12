import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const  SolicitudesList = ({ item }) => {
    const {id,image,nombre} = item 
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                    <View style={styles.datos}>
                        <View style={styles.datosPersona}>
                            <View style={styles.conatinerimage}>
                                <Image style={styles.image} source={item.image}/>
                            </View>
                            <View style={styles.containerdatos}>
                                <Text style={styles.txtNombre}>{item.nombre}</Text>
                            </View>
                        </View>
                        <View style={styles.containerbtns}>
                            <View style={{paddingLeft:25}}>
                                <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btntxt}>ACEPTAR</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingLeft:20}}>
                                <TouchableOpacity style={styles.btn2}>
                                    <Text style={styles.btntxt}>RECHAZAR</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
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
        height:120,
        width:350,
    },
    datosPersona:{
        flexDirection:'row',
    },
    containerdatos:{
        height:'100%',
        width:'80%',
    },
    txtNombre:{
        fontSize:18,
        color:'black',
    },
    conatinerimage:{
        height:'50%',
        width:'37%',
    },
    image:{
        justifyContent:'center',
        width:'50%',
        height: 65,
    },
    containerbtns:{
        height:7,
        width:300,
        flexDirection:'row',
        padding:10,
    },
    btn:{
        width:95,
        height:30,
        backgroundColor:'#009E0F',
        borderRadius:7,

    },
    btn2:{
        width:115,
        height:30,
        backgroundColor:'#CF2A27',
        borderRadius:7,
    },
    btntxt:{
        color:'#fff',
        fontSize:18,
        textAlign:'center',
    },

});