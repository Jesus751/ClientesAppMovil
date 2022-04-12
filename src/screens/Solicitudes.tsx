import React from "react";
import { FlatList, Text, View } from 'react-native';
import { styles } from "../theme/Solicitudes";
import { SolicitudesList } from '../components/SolicitudesList';

export const Solicitudes = () => {
  const Solicitud = [
    { 
      id:'1', 
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'2',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'3',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'4',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'5',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'6',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'7',
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
    {
      id:'8', 
      image:require('../assets/images/persona.png'),
      nombre:'Claudia Martines Sanz',
    },
  ]
    return (

      <View style={styles.container}>
            <View style={styles.NomPersona}>
                <Text style={styles.nombrePersona}>SOLICITUDES DE CLIENTES</Text>
            </View>
        <View style={styles.ListCompras}>
          <FlatList
            data={Solicitud}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <SolicitudesList item={item} />}
            ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
          />
        </View>
      </View>
    );
}