/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

let add = (a,b) => {
  //Add function here
  return a + b;
}


let sub = (a,b) => a-b

let div = (a,b) =>{  
  //Divide function here
  if(b == 0){
    return "division not possible";
  }
  return a/b;
}

let mul = (a,b) => a*b

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/


let doAllOperations = (a,b) => {
  console.log(`Addtion of ${a} and ${b} : `+add(a,b));
  console.log(`Subtraction of ${a} and ${b} : `+sub(a,b));
  console.log(`Multiplication of ${a} and ${b} : `+mul(a,b));
  console.log(`Division of ${a} and ${b} : `+div(a,b));
}
doAllOperations(4,5);