const array = [15,16,17,18,19];

function reducer(accumulator,currentValue,index){
    const retuns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return retuns;
}

array.reduce(reducer);