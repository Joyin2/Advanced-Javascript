

// const a = (x,y)=> a === 100 || b === 100 || a + b === 100;

const a = (x,y)=>{
  return x === 100 || y === 100 || x + y === 100;
}

console.log(a(100,0))
console.log(a(200,100));
console.log(a(23,43));
console.log(a(20,80));
