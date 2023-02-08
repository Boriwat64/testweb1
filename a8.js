function squareDigits(num) {
    let check = num.toString();
   let sum ="";
   let num1;
   
   for ( index = 0; index < check; index++) {
        
        sum += Math.pow(check[index],2);
        num1 = parseInt(sum);



    } console.log(num1);
    // console.log(typeof( num1)); เช็คชนิด
    
   
}
squareDigits(9119);
squareDigits(2483);
squareDigits(3212);