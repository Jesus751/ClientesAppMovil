import { StyleSheet } from "react-native";

 export const styles = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: '#E6E6E6',
    },
    containerTextParrafo:{
        fontSize:20,
        color: 'black',
        fontWeight:'bold'
    },
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor:'#fff',
        width: 300,
        marginBottom: 10,
        color: 'black',
        fontSize: 15,
        borderRadius: 7,
        height:40
    },
    btnSubmit:{
        backgroundColor: 'rgb(105, 105, 105)',
        width: '50%',
        height: 45,
        alignItems: 'center',
        borderRadius: 15,
        flexDirection: 'row',
    },
    btnSubmitText:{
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    buttonReturn:{
        position:'absolute',
        top:20,
        left:5,
        borderBottomWidth:1,
        borderColor:'black',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:100,
        fontWeight:'bold',
    },
    textbtn:{
        fontSize:18,
        color:'black',
    }
});
