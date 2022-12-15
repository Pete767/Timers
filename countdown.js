function countDown(time){
let timer = setInterval(function(){
    time--;
    if (time <= 0){
        clearInterval(timer);
        console.log('done');

    }
    else{
        console.log(time);
    }
},1000)
}

