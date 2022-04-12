import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from "../theme/HistorialCompras";
import { HistorialComprasList } from '../components/HistorialComprasList';


export const HistoarialCompras = () => {
  const HistorialComp = [
    {
      id:'1',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'2',
      tipoCompra:'Contado',
      fecha:'08/02/2022',
    },
    {
      id:'3',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'4',
      tipoCompra:'Contado',
      fecha:'08/02/2022',
    },
    {
      id:'5',
      tipoCompra:'Contado',
      fecha:'08/02/2022',
    },
    {
      id:'6',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'7',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'71',
      tipoCompra:'Contado',
      fecha:'08/02/2022',
    },
    {
      id:'8',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'9',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'10',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
    {
      id:'11',
      tipoCompra:'Credito',
      fecha:'08/02/2022',
    },
  ]
    return (
      <View style={styles.container}>
            <View style={styles.conatinerimage}>
              <Image style={styles.image} 
                  source={require('../assets/images/persona.png')}/>
            </View>
            <View style={styles.NomPersona}>
                <Icon name="person" size={20} color="black" />
                <Text style={styles.nombrePersona}>Claudia Martines Sanz</Text>
            </View>
            <View style={styles.limite}>
                <Icon name="call-sharp" size={20} color="black" />
                <Text style={styles.numero}>2481986754</Text>
            </View>
            <View style={styles.limite}>
                <Icon name="home-sharp" size={20} color="black" />
                <Text style={styles.numero}>Av. Juares #1006</Text>
            </View>
            <View style={styles.vence}>
                <Text style={styles.txtvence}>Puntos Acumulados:</Text>
                <Text style={styles.PuntosAcu}>100</Text>
            </View>
            <View>
                <Text style= {styles.total}>Historial de Compras</Text>
            </View>
            <View style={styles.ListCompras}>
              <FlatList
                    data={HistorialComp}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <HistorialComprasList item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
              />
            </View>
      </View>


    );
};
