// calculating factorial 

let a = prompt("Enter any number to find factorial : ");
let fact = 1;
for (let i = a; i >= 1 ; i--) {
    fact *= i;
    
}
document.write(`The factorial of ${a} is : ${fact}`);