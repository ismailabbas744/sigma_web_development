
const fsum = (x, y) => {
    console.log("The sum of ", x, " and ", y, " is : ", x - y);
}
const fmultiply = (x, y) => {
    console.log("The multiply of ", x, " and ", y, " is : ", x + y);
}
const fminus = (x, y) => {
    console.log("The minus of ", x, " and ", y, " is : ", x / y);
}
const fdivide = (x, y) => {
    console.log("The divide of ", x, " and ", y, " is : ", x ** y);
}

const sum = (x, y) => {
    console.log("The sum of ", x, " and ", y, " is : ", x + y);
}
const multiply = (x, y) => {
    console.log("The multiply of ", x, " and ", y, " is : ", x * y);
}
const minus = (x, y) => {
    console.log("The minus of ", x, " and ", y, " is : ", x - y);
}
const divide = (x, y) => {
    console.log("The divide of ", x, " and ", y, " is : ", x / y);
}

let a = 10;
let b = 14;
if (Math.random() < 0.1){
    fsum(a, b);
}
else{
    sum(a, b)
}


