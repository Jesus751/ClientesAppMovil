import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, View } from 'react-native';
import { styles } from "../theme/DetalleCredito";
import { DetalleCreditoList } from "../components/DetalleCreditoList";


export const DetalleCredito = () => {
  const Detallecre = [
    {
      id:'1',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'2',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'3',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'4',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'5',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'6',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'7',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'71',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'8',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'9',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'10',
      abono:150,
      fecha:'08/02/2022',
    },
    {
      id:'11',
      abono:150,
      fecha:'08/02/2022',
    },
  ]
    return (
      <View style={styles.container}>
            <View style={styles.NomPersona}>
                <Icon name="person" size={20} color="black" />
                <Text style={styles.nombrePersona}>Eduardo Salas</Text>
            </View>
            <View style={styles.limite}>
                <Text style={styles.credito}>$2500</Text>
                <Text style={styles.tamañoLetras}>Limite de Credito: </Text>
            </View>
            <View style={styles.vence}>
                <Text style={styles.fecha}>20/12/2022</Text>
                <Text style={styles.txtvence}>Vence :</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style= {styles.total}>Total Compra : </Text>
                <Text style={styles.compra}>$1000</Text>
            </View>
            <View style={styles.ListCompras}>
              <FlatList
                    data={Detallecre}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <DetalleCreditoList item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
              />
            </View>
            <View>
              <View style={styles.Vtotal}>
            <Text style= {styles.total}>Total:</Text>
            <Text style={styles.totalnum}>$900</Text>
          </View>
          <View style={styles.Vtotal}>
            <Text style= {styles.total}>Total  a Pagar:</Text>
            <Text style={styles.totalnum}>$100</Text>
          </View>
            </View>
      </View>


    );
};
