import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';


const Drawer = createDrawerNavigator(); 

export const  MenuLateral = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {... props}/>}
    >
      <Drawer.Screen name="Tabs" options={{title:'MENU'}} component={Tabs} />
    </Drawer.Navigator>
  );
};


const MenuInterno = ({navigation}: DrawerContentComponentProps) => {

  const {user, token, logOut} = useContext(AuthContext);

  return (
    <DrawerContentScrollView>
      {/* Parte del avatar*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri:'https://th.bing.com/th/id/OIP.6A5jF3fpP-UKMBy0WYJExgAAAA?pid=ImgDet&rs=1'
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del menu*/}
      <View style={styles.menuContainer}>
 
        <Text style={{fontWeight:'bold', fontSize:20, color:'black',}}>{user?.nombre}</Text>

        <Text style={{fontWeight:'bold', fontSize:20, color:'black',}}>{user?.telefono}</Text>

        <Text style={{fontWeight:'bold', fontSize:20, color:'black',}}>{user?.direccion}</Text>
        
          <TouchableOpacity style={{
            ...styles.menuBoton,
            flexDirection: 'row'}}

            onPress= { logOut}
          >
            <Icon name="log-out-outline" size={30} color="black" />
            <Text style={styles.menuTexto}> Cerrar Sesiòn</Text>
          </TouchableOpacity>



      </View>
    </DrawerContentScrollView>
  );
}