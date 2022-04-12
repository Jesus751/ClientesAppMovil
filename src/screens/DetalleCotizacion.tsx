import React from "react";
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { styles } from "../theme/DetalleCotizacion";
import { Compatiblelist } from "../components/Compatiblelist";


export const DetalleCotizacion = () => {
    const compatible = [
        {
          id:'1',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'2',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'3',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'4',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'5',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'6',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'7',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'71',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'8',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'9',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'10',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
        {
          id:'11',
          marca:'Chevrolet',
          modelo:'Silverado',
        },
      ]
    return (
        <View style={styles.container}>
            <View><Text style={styles.tituloPrincipal}>AUDIFONOS</Text></View>
            <View style={styles.imagecontainer}>
                <Image
                style={styles.imagePrincipal}
                    source={require('../assets/images/audifonos.jpg')}
                />
            </View>
            <View style={styles.cotizar}>
                <TouchableOpacity style={styles.btncotizar}>
                    <Text style={styles.txtcotizar}>
                        AGREGAR 
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.ListCotizacion}>
                <FlatList
                    data={compatible}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Compatiblelist item={item} />}
                    ItemSeparatorComponent= {() => <View style={{marginBottom:10,}}/> }
                    ListHeaderComponent={()=> <Text style={{fontSize:20,color:'black',textAlign:'center',}}>COMPATIBLES</Text>}
                />
            </View>
        </View>

    );
};