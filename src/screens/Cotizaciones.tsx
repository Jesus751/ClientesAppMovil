import React from "react";
import { View,Text, TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { styles } from "../theme/catalago";
import { Catalago } from "../components/Catalago";


export  const Cotizaciones = () => {
    const catalago = [
        {
          id:'1',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'2',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'3',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'4',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'5',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'6',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'7',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'8',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'9',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'10',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'11',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'12',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'13',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'14',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'15',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'16',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'17',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'18',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'19',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'20',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'21',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'22',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'23',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
        {
          id:'24',
          nombre:'smartwatch',
          image:require('../assets/images/audifonos.jpg'),
        },
      ]
    return (
        <View style={styles.container}>
            <Text style={styles.header}> CÁTALAGO DE PRODUCTOS</Text>
            <TextInput  style={styles.buscar}
                placeholder="Buscar Por Marca O Modelo De Unidad"
                autoCorrect={false}
                maxLength={25}
                onChangeText={() => {}}
              />
            <FlatList 
              style={styles.list} 
              data={catalago}  
              renderItem={({item}) => <Catalago item={item} />}
              numColumns={3}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent= {() => <View style = {{marginBottom:10}}/>}
              />
        </View>
    );
};

