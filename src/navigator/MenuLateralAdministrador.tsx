import React, { useContext } from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabsAdministrador } from './TabsAdministrador';
import { AuthContext } from '../context/AuthContext';


const DrawerAdmin = createDrawerNavigator();

export const  MenuLateralAdministrador = () => {
  return (
    <DrawerAdmin.Navigator
      drawerContent={(props) => <MenuInternoAdmin {... props}/>}
    >
      <DrawerAdmin.Screen name="TabsAdministrador" options={{title:'MENU'}} component={TabsAdministrador} />
    </DrawerAdmin.Navigator> 
  );
};


const MenuInternoAdmin = ({navigation}: DrawerContentComponentProps) => {
  
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