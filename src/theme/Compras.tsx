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
        backgroundColor:'#fafafa',
    },
    textPrincipal:{
        textAlign:'center',
        fontSize:30,
        color:'#2B78E4',
    },
    NomPersona:{
        width:'90%',
        flexDirection:'row'
    },
    nombrePersona:{
        color:'black',
        fontSize: 18
    },
    containerBuscar:{
        width:'100%',
        height:'10%',
        paddingTop: 10,
        flexDirection:'row',
    },
    buscar:{
        flexDirection:'row',
        width:'100%',
    },
    inputBuscar:{
        width:'32%',
        height: '80%',
        backgroundColor:'#C3DBD9',
        margin:5,
        borderRadius:15,
        color:'black',
        fontSize:15,
    },
    btnbuscar:{
        flexDirection:'row',
        backgroundColor:'#14658b',
        height: 30,
        width: '42%',
        borderRadius: 10,
    },
    btntext:{
        fontSize:17,
        padding:2,
        color: '#fff',
        paddingLeft:5,
    },
    ListCompras:{
        padding:5,
        width:'98%',
        height:'78%'
    }


});