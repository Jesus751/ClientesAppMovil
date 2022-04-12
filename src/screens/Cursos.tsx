import React, { useEffect, useState } from "react";
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export const Cursos = () => {

  const [datos,setDatos] = useState();

  const consultarApi = () =>{
    var formdata = new FormData();
    formdata.append("opcion", "7");
    formdata.append("catalogo", "4");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("http://tallergeorgio.hopto.org:5620/ferrumapp/Panel.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        const comprasUsu = result.Consulta
        setDatos(comprasUsu)
      })
      .catch(error => console.log('error', error));
  }
  consultarApi();
  console.log(datos);

  return (
   <FlatList 
      data={datos}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <View>
          <Text>{item.CIUDAD}</Text>
          <Text>{item.NOMBRE}</Text>
        </View>
      )}
   />
  )
}