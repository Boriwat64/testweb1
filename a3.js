function CheckArrDup(num,num1) {
    let check = true ;

        for (let n= 0; n<num.length; n++){
           
            for (let index = 0; index < 2; index++) {
                if (num[n]===num1[index]) {
                    check = false;
                }
            }
        }

                    if (check==true) {
                        console.log(num,"can overwrite in",num1)
                    }else{
                    console.log(num,"can't overwrite in",num1)
                }
        
        
    }
    CheckArrDup([1,5,9],[0,5]);
    CheckArrDup([3,4,5],[1,2]);
    
   