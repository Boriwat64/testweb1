function repeatString(str, times) {
    let repeatedString = "";
    
    if (typeof(str) === 'string'){
    while (times > 0) {
      repeatedString += str;
      times--;
    }
    return console.log( repeatedString);
    }else console.log("Not a String");
}

  repeatString("Mubasgir", 2);
  repeatString("Matt", 3);
  repeatString(1990 , 7);