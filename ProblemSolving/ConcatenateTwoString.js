const concatenate = (str1, str2)=>{
  // return str1.slice(1) + str2.slice(1)
  return str1.slice(1).concat(str2.slice(1));
}
console.log(concatenate("abcd","efgh"));