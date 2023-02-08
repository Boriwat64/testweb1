function truckin(num1,num2) {
    for (let index = 0; index < num1.length; index++) {
        num2.unshift(num1[index]);//unshift คือการส่งค่าไป ตัวแรก / shift คือการลบค่าตัวแรก
        // num2.push(num1[index]) //push คือการส่งค่าไปตัวหลัง / pop คือการลบค่าตัวหลัง
       // num2.sort((a,b) => a-b);
    }return console.log(num2);
}
truckin([1,73,78,4],[13,6]);
truckin([899],[12,34,434,5434,6,67,82,22]);