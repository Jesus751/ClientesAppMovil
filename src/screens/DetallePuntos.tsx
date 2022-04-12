import React from "react";
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from "../theme/DetallePuntos";

export const DetallePuntos = () => {
    return (
        <View style={styles.container}>
            <View><Text style={styles.tituloPrincipal}>AUDIFONOS BLUETOOTH</Text></View>
            <View style={styles.imagecontainer}>
                <Image
                style={styles.imagePrincipal}
                    source={require('../assets/images/audifonos.jpg')}
                />
            </View>
            <View style={styles.detalle}>
                <Text style={styles.txtdetalle}>Audífonos Bluetooth manos libres con batería de larga duración ideales para hacer ejercicio etc.</Text>
            </View>
            <View style={styles.puntosre}>
                <Text style={styles.txtpuntos}>Puntos Requeridos</Text>
                <Text style={styles.puntosnum}>1000</Text>
            </View>
            <View style={styles.agregar}>
                <TouchableOpacity style={styles.btnagregar}>
                    <Text style={styles.txtagregar}>
                        AGREGAR 
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
