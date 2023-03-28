// let arr = [10, 20, 30, 40, 50, 60]
// let newArr = arr.map((value,i)=>{
//     value++
//     return value
// })
// console.log(newArr);

let myArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 },
  { name: "Alice", age: 35 },
];
const newArr = myArray.map((value) => {
  return value.name
});
console.log(newArr);