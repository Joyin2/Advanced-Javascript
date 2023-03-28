let isEven = (element) => {
  // if (element % 2 === 0) {
  //   return true;
  // }
  // return false;
  return element % 2 ===0;
};

// console.log(isEven(2));

let result = [2, 2, 6, 8].every((e) => e % 2 === 0);
console.log(result);