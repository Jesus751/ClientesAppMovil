import axios from 'axios';
const  FormData = require('form-data');
const  data = new FormData();
data.append('opcion', '7');
data.append('catalogo', '4');

const  config = {
  method: 'post',
  url: 'http://tallergeorgio.hopto.org:5620/ferrumapp/Panel.php',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
