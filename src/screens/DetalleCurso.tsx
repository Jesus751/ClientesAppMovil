import React from "react";
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from "../theme/detallecursos";


export  const DetalleCurso = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textPrincipal}>Curso</Text>
            <View style={styles.containervideos}>
                <TouchableOpacity>
                    <Image
                        style={styles.imagePrincipal}
                        source={require('../assets/images/audifonos.jpg')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}