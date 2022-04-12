import React from "react";
import {Image, Text, View, TouchableOpacity} from 'react-native';
import { styles } from "../theme/Puntos";
import { useNavigation } from '@react-navigation/native';

export const  PuntosAcumulados = ({ item }) => {
    const {id, nombre, image} = item
    const navigation = useNavigation();
    return(
            <View style={styles.cars}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('DetallePuntos')}
                    activeOpacity={0.8}
                    >
                    <Image style={styles.image} source={item.image}/>
                    <Text style={styles.descripcion}>{item.nombre}</Text>
                </TouchableOpacity>
            </View>


    );
}