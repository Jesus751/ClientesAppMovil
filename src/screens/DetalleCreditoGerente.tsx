import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Image, Text, View } from 'react-native';
import { styles } from "../theme/CreditoGerente";
import { DetalleCreditoGerenteList } from '../components/DetalleCreditoGerenteList';
import { TouchableOpacity } from "react-native-gesture-handler";


export const DetalleCreditoGerente = () => {
  const DetallecreditoGe = [
    {
      id:'1',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'2',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'3',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'4',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'5',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'6',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'7',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'71',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'8',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'9',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'10',
      abono:2000,
      fecha:'08/02/2022',
    },
    {
      id:'11',
      abono:2000,
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
            <View style={styles.ContainerLimite}>
                <Text style= {styles.txtLimite}>38002</Text>
                <Text style= {styles.txtcre}>Limite De Crèdito:$</Text>
            </View>
            <View>
                <Text style= {styles.txtCredito}>CREDITO</Text>
            </View>
            <View style={styles.ContainerLimite}>
                <Text style= {styles.txtLimite}>29/12/2022</Text>
                <Text style= {styles.txtcre}>Vence:</Text>
            </View>
            <View style={styles.vence}>
                <Text style={styles.txtvence}>Total Compra: $</Text>
                <Text style={styles.PuntosAcu}>100</Text>
            </View>
            <View style={styles.ListCompras}>
              <FlatList
                    data={DetallecreditoGe}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <DetalleCreditoGerenteList item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
              />
            </View>
            <View style={styles.txtfinal}> 
                <Text style= {styles.finaltxt}>Total:$</Text>
                <Text style= {styles.txtpreciofinal}>2000</Text>
            </View>
            <View style={styles.txtfinal}> 
                <Text style= {styles.finaltxt}>Total A Pagar:$</Text>
                <Text style= {styles.txtpreciofinal}>2000</Text>
            </View>
            <View style={styles.containerbtn}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>ENVIAR RECORDATORIO</Text>
              </TouchableOpacity>
            </View>
      </View>


    );
};