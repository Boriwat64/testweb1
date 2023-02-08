function arrayofMuliples(num1,num2) {
    let sum=[];
    let sum1 =0;
   
    // for (let n= 1; n<num2; n++){
    //     sum1 = num1 * (n);
    //     sum.push(sum1);
    // }  

        for (let n= 0; n<num2; n++){
            sum1 = num1 * (n+1);
            sum.push(sum1);

            //sum[n] = num1 * (n+1);
            //sum.push(num1*(n+1));
            
        }
        return console.log(sum);
        
    }
    arrayofMuliples(7,5);
    arrayofMuliples(12,10);
    arrayofMuliples(17,6);
   