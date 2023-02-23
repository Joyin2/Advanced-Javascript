//for in loop
// let collection = {
//     firstName : "joyin",
//     lastName : "laskar",
//     age : 22,
//     email : "joyinlaskar@gmail.com"
// }
// for (var key in collection){
//     console.log(key[collection])
// }

// while Loop
// let num = 0;
// while(num<=10){
//     console.log("num")
//     num++
// }
let tableOf = prompt("Which table you want to print")

for(i=1; i<=10; i++){
    
    // var tableOf = 7;
    document.write(` ${tableOf} x ${i} = ${tableOf*i} <br>`);
}