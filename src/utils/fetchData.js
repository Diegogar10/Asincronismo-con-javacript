//import xmlhttprequest from '../../node_modules/xmlhttprequest/lib/XMLHttpRequest.js';
//let XMLHttpRequest=xmlhttprequest.XMLHttpRequest;

let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) =>{

    return new Promise((resolve,reject)=>{

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',url_api, true);
        xhttp.onreadystatechange =(()=>{
          
            if(xhttp.readyState === 4){ 
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error', url_api));
            }

        });
        xhttp.send();

    });
}

//export default fetchData;

//recordar que para utilizar el metodo import y export debemos especificar en package.json el "type":"module"

module.exports = fetchData;
