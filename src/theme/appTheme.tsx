import { StyleSheet } from "react-native";

export const colores = {
    primary: '#E6E6E6',
}
export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title:{
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center'
    },
    botonGrande:{
        width:100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    botonGrandeText:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    avatarContainer:{
        alignItems: 'center',
        marginTop: 15,
    },
    avatar:{
        width: 150,
        height: 150,
        borderRadius:100,
    },
    menuContainer:{
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuBoton:{
        marginVertical:10,
    },
    menuTexto:{
        fontSize: 20,
    },
    containerDC:{
        justifyContent: 'center',
        padding:15,
    },
    NomPersona:{

        flexDirection: 'row',
    },
    busFecha:{
        flexDirection: 'row',
        padding:15,
    },
    btnbuscar:{
        flexDirection: 'row',
        backgroundColor:'#2B78E4',
        width:'100%',
        borderRadius: 6
    },
    txtTotal:{
        flexDirection: 'row-reverse'
    },
    txtTotalt:{
        paddingLeft:10,
    },
    imagnesContainer:{
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    container:{
        padding:18,
        alignContent:'center',
        width:'90%',
        height:'90%',
    },
    btnCrearCanjear:{
        backgroundColor: '#2B78E4',
        width: '80%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    btnCrearCanjearText:{
        fontSize:20,
        color: '#fff',
    },
    tablaText:{
        fontSize:18
    },
    letra:{
        fontSize:18,
        color:'black',
    },


})