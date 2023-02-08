function num(times) {
let sum=0 ;
let sum1=0 ;
    
    for (let n= 0; n<11; n++){
        sum = times*n;
        sum1 += sum;
        
    }
    return console.log(sum1);
    
}

num(7,5);
num(12,10);
num(17,10);
