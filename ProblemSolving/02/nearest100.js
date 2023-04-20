const nearest = (num1, num2)=>{
    if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
        return num1
    } else {
        return num2
    }
}
console.log(nearest(200,120));