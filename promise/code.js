let p = new Promise((resolve, reject) => {
    let sum = 1+2;
    if(sum === 3){
        resolve('Exito en la operacion');
    }else{
        reject('Operacion fallida')
    }
});

p.then((message) => {
    console.log('Esto es un then. ' + message);
}).catch((message) => {
    console.log('Esto es un catch. ' + message);
});