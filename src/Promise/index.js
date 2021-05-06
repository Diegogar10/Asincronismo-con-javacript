const somethingWillHappen = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Hey!");
        }else{
            reject("Ups!");
        }
    });
}

 somethingWillHappen()
 .then(response=>console.log(response))
 .catch(err => console.error(err));


//promesa numero 2

const somethingWillHappen2 = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('True');
            },2000);
        }else{
            const error = new Error('Whoop!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response=>console.log(response))
    .catch(err => console.error(err));


//correr varias promesas al tiempo de forma encadenada

Promise.all([somethingWillHappen(),somethingWillHappen2()])
    .then(response=>{
        console.log('Array of result',response);
    })
    .catch(err=>{
        console.error(err);
    });