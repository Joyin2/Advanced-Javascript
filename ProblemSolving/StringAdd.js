const makeNStr = (str)=>{
  if (str.length<3) {
    return str
  }else{
    return str.slice(0, 3) + str.slice(-3);
  }
}
console.log(makeNStr("abazyz"));