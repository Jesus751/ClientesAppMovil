import React from "react";
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { styles } from "../theme/DetalleProducto";

export const DetalleProducto = () => {
    //consumir api
  const [comprass,setComprass] = useState();
  const consultarApi = () =>{
    var formdata = new FormData();
    formdata.append("opcion", "8");
    const idCliente = formdata.append("idcliente", "1244");
    const fechaInicio = formdata.append("fech_inicio", "2021-10-12");
    const FechaFinal =formdata.append("fech_final", "2022-03-12");
    
    var requestOptions = {
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
    return (
        <View style={styles.container}>
            <View><Text style={styles.tituloPrincipal}>AUDIFONOS</Text></View>
            <View style={styles.imagecontainer}>
                <Image
                style={styles.imagePrincipal}
                    source={require('../assets/images/audifonos.jpg')}
                />
            </View>
            <View style={styles.detalles}>
                <View style={styles.alinear}>
                    <Text style={styles.txtinfo}>Cantidad:</Text>
                    <Text style={styles.txtdato}>2</Text>                  
                </View>
                <View style={styles.alinear}>
                    <Text style={styles.txtinfo}>Producto:</Text>
                    <Text style={styles.txtdato}>Audifonos</Text>                  
                </View>
                <View style={styles.alinear}>
                    <Text style={styles.txtinfo}>Precio: $</Text>
                    <Text style={styles.txtdato}>200000</Text>                  
                </View>
            </View>
        </View>


    );
};