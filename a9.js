function pingPong(str,check) {
    let sum=[];
    if (check==true) {
        for (index = 0; index < str.length; index++) {
          let num1= "Pong!";
           sum.push(str[index]+num1 );
            // str.push("Pong!");
           
        }
         console.log(sum);
        // console.log(typeof( sum));
        
    } else{
        for (index = 1; index < str.length; index++) {
            let num1= "Pong!";
             sum.push(str[index]+num1) ;
              // str.push("Pong!");
             
          }
         console.log(sum+"Pong!");
        // console.log(typeof( sum));
    }
    // console.log(sum);
    
}


pingPong(["Ping!"], true) 

pingPong(["Ping!", "Ping!"], false)

pingPong(["Ping!", "Ping!", "Ping!"], true) 