function sumOfCubes(num,num1,num2) {
    let sum=[];
    let sum1 =0;
   
    // for (let n= 1; n<num2; n++){
    //     sum1 = num1 * (n);
    //     sum.push(sum1);
    // }  

        for (let n= 0; n<num.length; n++){
            sum1 += Math.pow(num[n],3);
            
            // Math.pow คือการยกกำลัง
            
            
        }
        return console.log(sum1);
        
    }
    sumOfCubes([1,5,9]);
    sumOfCubes([3,4,5]);
    sumOfCubes([2]);
    sumOfCubes([]);
   