const nearest = (num1, num2) => {
  if (100 - num1 < 100 - num2) {
    return num1;
  } else {
    return num2;
  }
};
console.log(nearest(70, 30));
