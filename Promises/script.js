const probj1 = new Promise((reslove, reject) => {
  setTimeout(() => {
    let roll_no = [1, 2, 3, 4, 5];
    reslove(roll_no);
    // reject("error while communicating");
  }, 2000);
});

// const getBioData = ()=>{
//   return new Promise((resolve, reject) => {

//   });
// }
const getBioData = (indexdata) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexdata) => {
        const bioData = {
          name: "joyin",
          age: 22,
        };
        resolve(
          `My roll no is ${indexdata}. My name is ${bioData.name} and I am ${bioData.age} years old`
        );
        // console.log(`My roll no is ${rollno}. My name is ${bioData.name} and I am ${bioData.age} years old`);
      },
      2000,
      indexdata
    );
  });
};

probj1
  .then((rollno) => {
    console.log(rollno);
    getBioData(rollno[1]).then((k) => {
      console.log(k);
    });
  })
  .catch((err) => {
    console.log(err);
  });
