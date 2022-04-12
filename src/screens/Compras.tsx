import React, {useContext, useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, TextInput, FlatList, Button, Platform, TouchableOpacity } from 'react-native';
import { styles } from "../theme/Compras";
import { ComprasList } from '../components/ComprasList';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AuthContext } from '../context/AuthContext';




export const Compras = () => {

  // parte para la fecha 
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [text, setText] = useState('Fecha');

  const onChange = (event: any, selectedDate: any) =>{
    const currenDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currenDate);

    let tempDate =  new Date(currenDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1)+ '/' + tempDate.getFullYear();
    setText(fDate);
  };
  const showDatePicker = (currentMode: any) =>{ 
    setShow(true);
    setMode(currentMode);
  };

//consumir api

  const [comprass,setComprass] = useState();
  const consultarApi = () =>{
    const  formdata = new FormData();
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
  
  consultarApi();
  const {user} = useContext(AuthContext);
    return (
      <View style={styles.container}>
            <View>
                <Text style={styles.textPrincipal}>COMPRAS</Text>
             </View>
            <View style={styles.NomPersona}>
                <Icon name="person" size={20} color="black" />
                <Text style={styles.nombrePersona}>{user?.nombre}</Text>
            </View>
            <View style={styles.containerBuscar}>
              <View style={styles.buscar}>
                <View>
                  <TouchableOpacity onPress={() => showDatePicker('date') }>
                    <Icon name="calendar" size={35} color="#14658b" />
                  </TouchableOpacity> 
                </View>
                {show && (
                  <DateTimePicker 
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display='default'
                    onChange={onChange}
                  />
                )}
                <Text style={{color:'black', fontSize:20}}>{text}</Text>
                <TouchableOpacity style={styles.btnbuscar}>
                <Text style={styles.btntext}>Buscar Compras</Text>
                <Icon name="search-outline" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ListCompras}>
              <FlatList
                    data={comprass}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <ComprasList item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
              />
            </View>

      </View>


    )
}