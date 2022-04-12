import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6E6E6',
    },
    containerLogo:{
        flex: 1,
        justifyContent: 'center',
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 

    },
    input:{
        backgroundColor:'#fff',
        width: 300,
        marginBottom: 18,
        color: '#222',
        fontSize: 16,
        borderRadius: 15,
        height: 45,
    },
    btnSubmit:{
        backgroundColor: 'rgb(105, 105, 105)',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    btnSubmitText:{
        color: '#fff',
        fontSize: 18,
    },
    btnCrearCuenta:{
        marginTop: 7,
        padding: 5,
    },
    btnCrearCuentaText:{
        color: '#000000',
        fontSize: 18,
    },
    btnGoogle:{
        backgroundColor: 'rgb(207, 42, 39)',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 7,
        flexDirection: 'row',
    },
    btnbtnGoogleText:{
        color: '#fff',
        fontSize: 18,
        marginLeft: 7,
    },
});
