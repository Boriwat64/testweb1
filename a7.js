function sayHelloBye(str,num) {
    
    str=str[0].toUpperCase() + str.substring(1);
    //toUpperCase() ทำให้เป็นตัวใหญ่
    //substring() ตัดค่า โดยกำหนดค่า(จะเก็บใว้ตั้งแต่ตำแหน่งใด)
    
    if (num==1) {
        console.log("Hello",str);
    }else{
        console.log("Bye",str);
    }
}
sayHelloBye("alon",1)
sayHelloBye("Tomi",0)
sayHelloBye("jose",0)