import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";

export const  Carritolist = ({ item }) => {
    const {id,image, numProductos, nombre, precio} = item
    const navigation = useNavigation();
    return(
            <View style={styles.containerList}>
                    <View style={styles.datos}>
                        <View style={styles.conatinerimage}>
                            <Image style={styles.image} source={item.image}/>
                        </View>
                        <View style={styles.containerdatos}>
                            <View style={styles.cantidad}>
                                <Text style={styles.primario}>Cantidad:</Text>
                                <TouchableOpacity>
                                    <Icon name="remove-circle-sharp" size={20} color="black" />
                                </TouchableOpacity>
                                <Text style={styles.txtnombre}>{item.numProductos}</Text>
                                <TouchableOpacity>
                                    <Icon name="add-circle" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.producto}>
                                <Text style={styles.primario}>Producto:</Text>
                                <Text style={styles.txtfecha}>{item.nombre}</Text>
                            </View>
                            <View style={styles.precio}>
                                <Text style={styles.primario}>Precio:</Text>
                                <Text style={styles.txtfecha}>{item.precio}</Text>
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
        flexDirection:'row',
    },
    cantidad:{
        flexDirection:'row',
    },
    producto:{
        flexDirection:'row',
        paddingTop:27,
    },
    precio:{
        flexDirection:'row',
        paddingTop:27,
    },

    conatinerimage:{
        height:'100%',
        width:'40%',
    },
    containerdatos:{
        height:'100%',
        width:'60%',
    },

    txtnombre:{
        fontSize:14,
        color:'black',
        paddingLeft:10,
        paddingRight:10,
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
        paddingRight:10,
    },
    image:{
        justifyContent:'center',
        width:'100%',
        height: 120,
    },

});