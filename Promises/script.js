const probj1 = new Promise((reslove, reject)=>{
  setTimeout(()=>{
    let roll_no = [1, 2, 3, 4,5]
    // reslove(roll_no);
    reject('error while communicating')
  }, 2000)
})
probj1
  .then((rollno) => {
    console.log(rollno);
  })
  .catch((err) => {
    console.log(err);
  });
