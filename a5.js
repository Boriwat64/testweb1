function revrseWords(string) {
    if (typeof string === 'string'){
    let Arrstr = string.split(' ');
    let reverse=Arrstr.reverse();
    let Final =reverse.join(' ');
    console.log(string, "<<reverse>>" ,Final);
    }else{
        let str2 = string.toString();
        console.log("i told that string!");
        revrseWords(str2);
    }
    
}
 
revrseWords("Korn tae mak");
revrseWords(["4 5 6"]);
revrseWords("1 2");

