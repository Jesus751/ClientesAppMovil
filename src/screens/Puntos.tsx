import React from "react";
import {  View,Text, TextInput, FlatList } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { PuntosAcumulados } from "../components/PuntosAcumulados";
import { styles } from "../theme/Puntos";


export  const Puntos = () => {
  const productos = [
    {
      id:'1',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'2',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'3',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'4',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'5',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'6',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'7',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'8',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'9',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'10',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'11',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'12',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'13',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'14',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'15',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'16',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'17',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'18',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'19',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'20',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'21',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'22',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'23',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
    {
      id:'24',
      nombre:'smartwatch',
      image:require('../assets/images/smartwatch.jpg'),
    },
  ]
    return (
        <View style={styles.container}>
            <View style={styles.txtPrincipal}>
            <Text style={styles.header}> PUNTOS ACUMULADOS</Text>
            </View>
            <View style={styles.puntos}>
              <View style={styles.txtPuntos}>
                <Text style={styles.txtPriPuntos}>Puntos :</Text>
                <Text style={styles.txtnum}>50</Text>
              </View>
              <View style={styles.txtPuntos}>
                <Text style={styles.txtvence}>Vencen :</Text>
                <Text style={styles.txtnum}>12/03/2022</Text>
              </View>
            </View>
            <View style={styles.list} >
              <FlatList 
                data={productos}  
                renderItem={({item}) => <PuntosAcumulados item={item} />}
                numColumns={3}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={true}
                ItemSeparatorComponent= {() => <View style = {{marginBottom:10}}/>}
                ListHeaderComponent= {() => <Text style={styles.textPremio}>Premios disponibles</Text>}
                />
            </View>
        </View>
    );
};

