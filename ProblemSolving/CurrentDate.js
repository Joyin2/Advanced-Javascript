let date = new Date();
const formatDate = (date = new Date()) => {
  let days = date.getDay() + 1;
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${days}/${month}/${year}`;
};
console.log(formatDate());



// let date = new Date();
// const formatDate = (date) => {
//   let days = date.getDay() + 1;
//   let month = date.getMonth() + 1;
//   let year = date.getFullYear();
//   return `${days}/${month}/${year}`;
// };
// console.log(formatDate(date));




// Both are correct