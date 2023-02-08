function sliceSum(num1,num2) {
    let sum =0;
    for (let index = 0; index < num2; index++) {
        //  sum = sum + num1[index];
         sum += num1[index];
         
    }console.log(sum);
}

sliceSum([1,3,2],2);
sliceSum([4,2,5,7],4);
sliceSum([3,6,2],0);