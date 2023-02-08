const numberSplit = (num) => {
    if (num === undefined) {
        return "input parmeter can't be empty"
    } else {
        let a = Math.floor(num / 2);
        let b = num - a;
        let c = [];
        c.push(a, b);
    return c;
    }
  };
  console.log(numberSplit(4));
  console.log(numberSplit(10));
  console.log(numberSplit(11));
  console.log(numberSplit(-9));

//   Boriwat64
//   s6406021620131@email.kmutnb.ac.th
//   git config --global user.email "6406021620131@fitm.kmutnb.ac.th"

// git config --global user.name "Boriwat64"