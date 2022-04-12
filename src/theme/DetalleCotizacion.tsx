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
    cotizar:{
        paddingTop:2,
        height:'7%',
        width:'90%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        
    },
    btncotizar:{
        backgroundColor:'#2B78E4',
        height:'100%',
        width:'80%',
        borderRadius:7,
        alignItems:'center',
        justifyContent:'center', 
    },
    txtcotizar:{
        color:'#fff',
        fontSize: 22,
        paddingLeft:10,
    },
    ListCotizacion:{
        padding:5,
        width:'100%',
        height:'53%',
    }
});