import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    header :{
        fontWeight: 'bold',
        fontSize: 24,
        textAlign:'center',
        marginTop: 30,
        color:'#2B78E4',
    },
    buscar :{
        fontSize: 15,
        textAlign:'center',
        marginTop: 10,
        color:'black',
        backgroundColor:'#F2F2F2',
        borderRadius:16,
    },
    inputBuscar:{
        fontSize: 15,
        textAlign:'center',
        marginTop: 10,
        color:'black',
        backgroundColor:'#F2F2F2',
        borderRadius:16,
        height: '70%',
        width: '30%',

    },
    puntos:{
        flexDirection:'row',
        paddingVertical:10,
    },
    txtPuntos:{
        flexDirection:'row',
    },
    txtPriPuntos:{

        paddingRight:10,
        fontSize:17,
        color:'red',
    },
    txtnum:{
        fontSize: 17,
        color: 'black',
    },
    txtvence:{
        paddingRight:10,
        paddingLeft:10,
        fontSize:17,
        color:'red',
    },
    textPremio:{
        fontWeight:'bold',
        fontSize: 20,
        textAlign:'center',
        color:'#2B78E4',

    },
    list:{
        width:'95%',
        paddingTop:2,
    },
    cars:{
        height:'70%',
        width:'37%'
    },
    descripcion:{
        color:'black',
        padding:2,
        fontSize:15,
        width:'100%',
    },
    image:{
        justifyContent:'center',
        width:'37%',
        height: 60,
    },

});
