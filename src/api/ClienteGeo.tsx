import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.10.235:8080/api';

const ClienteGeo = axios.create({baseURL});

ClienteGeo.interceptors.request.use(

    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
)



export default ClienteGeo;
