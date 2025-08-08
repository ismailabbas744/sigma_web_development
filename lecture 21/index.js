let rand = Math.random();
console.log(rand);

let a = prompt("Enter first number : ");
let b = prompt("Enter operation : ");
let c = prompt("Enter second number : ");


const obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}
if (rand > 0.1){
    // perform right operations 
    document.write(`The result is ${eval(`${a}${b}${c}`)}`)
    
    
}
else{
    // perform wrong operations 

    b = obj[b];
    document.write(`The result is ${eval(`${a}${b}${c}`)}`);
    

}
