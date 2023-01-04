let num1='150';
let flol = '1.50';

console.log("*******Cocverting sting to intetegrs*******");
//Cocverting sting to intetegrs
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0XF'));//Hexadecimal number

console.log("*******Cocverting sting to float*******");
//Cocverting sting to float
console.log(parseFloat('1.15abc"='));
console.log(parseFloat(flol));
console.log(parseFloat('ABC'));

console.log("*******More Conversion Examples*******");
//More Conversion Examples
//Numbers after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt('${1 + 1}'));

console.log("*******Converting numbers to strings*******")
//Converting numbers to strings
console.log(num1.toString());
console.log(flol.toString());
console.log((100).toString());
