import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    tamañoLetras:{
        color:'black',
        fontSize: 18
    },
    container:{
        padding:10,
        height:'100%',
        width:'100%',
    },
    imagecontainer:{
        justifyContent: 'center',
        height:'35%',
        width:'90%',
    },
    imagePrincipal:{
        alignContent:'center',
        height:'100%',
        width:'100%',
    },
    tituloPrincipal:{
        fontSize:25,
        color:'black',
        textAlign:'center',

    },
    txtdetalle:{
        fontSize:18,
        color:'black',
    },
    puntosre:{
        width:'90%',
        height:'6%',
        flexDirection:'row',
    },
    txtpuntos:{
        fontSize:18,
        color:'black',
        paddingRight:15,
    },
    puntosnum:{
        fontSize:18,
        color:'#2B78E4', 
    },
    agregar:{
        paddingTop:2,
        height:'7%',
        width:'90%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    },
    btnagregar:{
        backgroundColor:'#2B78E4',
        height:'100%',
        width:'80%',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center', 
    },
    txtagregar:{
        color:'#fff',
        fontSize: 22,
        paddingLeft:10,
    },
    detalle:{
        padding:5,
        width:'100%',
        height:'20%',
    }
});