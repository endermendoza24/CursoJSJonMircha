function cuadradoCallback(value, callback){
    setTimeout(()=>{
        callback(value,value*value);
    },0|Math.random() * 1000)
}

cuadradoCallback(0,(value,result)=>{
    console.log("Inicia callback");
    console.log(`Callback ${value}, ${result}`)
});

//  no le entendi muy bien a este tema ||| repasar