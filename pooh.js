function checkArrDup(arr1,arr2) {
    let check = true;
    for (let i = 0; i < arr1.length; i++) {
       for (let j = 0; j < 2; j++) {
            if (arr1[i]===arr2[j]) {
                check = false;
            }
            
        }
        
    }
    if (check == true) {
        console.log(arr1,"can't overwrite in",arr2);
    }else {
        console.log(arr1,"can overwrite in",arr2);
    }
    
}

checkArrDup([1, 2, 3],[0, 5]);
checkArrDup([3, 4, 5],[0, 5]);
