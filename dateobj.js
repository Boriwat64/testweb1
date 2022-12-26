//Date function return milliseconds that have elapsed
//since midnight on January 1, 1970, UTC
//this example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
//expectd output: starting timer...

setTimeout(()=> {
    const millis = Date.now() - start;

    console.log('seconds elapsed = ${Math.floor(millis/1000)}');
    //expectd output: seconds elapsed = 2
},2000);