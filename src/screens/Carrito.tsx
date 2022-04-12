import React from "react";
import { FlatList, Text, View } from 'react-native';
import { styles } from "../theme/Cariito";
import { Carritolist } from "../components/Carritolist";

export const Carrito = () => {
  const carritoli = [
    {
      id:'1',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'2',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'3',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'4',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'5',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'6',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'7',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'8',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'9',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'10',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'11',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
    {
      id:'12',
      image:require('../assets/images/audifonos.jpg'),
      numProductos: 2,
      nombre:'Compra',
      precio: 2000000,
    },
  ]
    return (

      <View style={styles.container}>
            <View style={styles.NomPersona}>
                <Text style={styles.nombrePersona}>PRODUCTOS A COTIZAR</Text>
            </View>
        <View style={styles.ListCompras}>
          <FlatList
            data={carritoli}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Carritolist item={item} />}
            ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
          />
        </View>
        <View style={styles.total}>
          <Text style={styles.estado}>Pagado</Text>
          <Text style= {styles.txtTotal}>Total : 425</Text>
        </View>
      </View>
    );
}