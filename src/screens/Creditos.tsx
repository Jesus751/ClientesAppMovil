import React, {useState} from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, TextInput, FlatList, Button, Platform, TouchableOpacity } from 'react-native';
import { styles } from "../theme/Creditos";
import DateTimePicker from '@react-native-community/datetimepicker';
import { CreditosList } from "../components/CreditosList";




export const Creditos = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [text, setText] = useState('Fecha');

  const onChange = (event, selectedDate) =>{
    const currenDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currenDate);

    let tempDate =  new Date(currenDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1)+ '/' + tempDate.getFullYear();
    setText(fDate);

    console.log(fDate);
  };
  const showDatePicker = (currentMode) =>{ 
    setShow(true);
    setMode(currentMode);
  };

  const creditoslis = [
    {
      id:'1',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'2',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'3',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'4',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'5',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'6',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'7',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'71',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'8',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'9',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'10',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
    {
      id:'11',
      nombre:'Compra 1',
      fecha:'08/02/2022',
    },
  ]
    return (
      <View style={styles.container}>
            <View>
                <Text style={styles.textPrincipal}>CRÉDITOS</Text>
             </View>
            <View style={styles.NomPersona}>
                <Icon name="person" size={20} color="black" />
                <Text style={styles.nombrePersona}>Eduardo Salas</Text>
            </View>
            <View style={styles.containercredito}>
              <View style={styles.txtCredito}>
                <Text style={styles.limcre}>Limite De Crédito: $</Text>
                <Text style={styles.totales}>2500</Text>       
              </View>
              <View style={styles.txtCredito}>
                <Text style={styles.limcre}>Crédito Disponible: $</Text>
                <Text style={styles.totales}>1500</Text>        
              </View>
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
                <Text style={styles.btntext}>Buscar</Text>
                <Icon name="search-outline" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.ListCompras}>
              <FlatList
                    data={creditoslis}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <CreditosList item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
              />
            </View>

      </View>


    )
}