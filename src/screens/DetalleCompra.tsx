import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { FlatList, Text, View } from 'react-native';
import { styles } from "../theme/DetalleCompra";
import { StackScreenProps } from "@react-navigation/stack";
import { DetalleCompraList } from '../components/DetalleCompraList';


interface Props extends StackScreenProps<any, any>{};
export const DetalleCompra = ({ navigation }: Props) => {
  
//consumir api
const [comprass,setComprass] = useState();
  const consultarApi = () =>{
    const formdata = new FormData();
    formdata.append("opcion", "9");
    formdata.append("idcliente", "1244");
    formdata.append("fech_inicio", "2021-10-12");
    formdata.append("fech_final", "2022-03-12");
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://tallergeorgio.hopto.org:5620/ferrumapp/Panel.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        const comprasUsu = result.Consulta
        setComprass(comprasUsu)
      })
      .catch(error => console.log('error', error));
  }
  consultarApi();
    return (

      <View style={styles.container}>
            <View style={styles.NomPersona}>
                <Icon name="person" size={20} color="black" />
                <Text style={styles.nombrePersona}>Eduardo Salas</Text>
            </View>
            <View style={styles.NomPersona}>
              <Icon name="calendar-outline" size={20} color="black" />
              <Text style={styles.nombrePersona}> 10/12/2022</Text>
            </View>

        <View style={styles.ListCompras}>
          <FlatList
            data={comprass}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <DetalleCompraList item={item} />}
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