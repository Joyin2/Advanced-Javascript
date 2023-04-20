// const numbers = [
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
//   "ten",
// ];
// console.log(numbers.slice(2, 4));
// console.log(numbers.slice(2,-3));
// console.log(numbers);

const newString = (str)=>{
    if (str.length<3) {
        return(
            str
        )
    }else{
        return(
            str.slice(0,3) + str.slice(-3)
        )
    }
}
console.log(newString("helloro"));