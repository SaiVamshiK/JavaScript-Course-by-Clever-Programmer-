/*
    console.log("Hello world");
    console.log(a)
    var a = "saivamshi";

    function add(a,b){
        console.log(a+b);
    }
    add(2,3)

    // user input

    // Prompt is used for taking user input
    // Alert is used for displaying alert messages

    fruit = prompt("What is ur fav fruit?");
    console.log(fruit);

    food = Number(prompt("What is the price of food?"));
    tipPercent = Number(prompt("What is tip Percent?"))/100;
    tipAmt = Number(food*tipPercent);
    console.log("Tip Amount: "+tipAmt)
    alert("Tip Amount: "+tipAmt)
*/

/* data types (strings, numbers)
numbers 👉 1, 5, 10, 100, 2.5
strings 👉 'hello', "what is up"
arrays 👉 []
objects 👉 {}
boolean 👉 true / false (banks)
*/

/* Math Operators
Multiply *
Divide /
Exponents **
Modulo/Remainder %  5%2 = 1
Add +
Subtract -
*/

/* Math Methods
Floor - Rounds down
Ceil - Rounds up
Random - gives you number between 0 and 1
Math.random() : gives you number between 0 and 1
Math.random()*100 : gives you number between 0 and 100
*/


/*
    // Conditionals in JS
    let weather = prompt("What is the weather like?");
    if(weather == 'rainy'){
        console.log("Wear an umbrella");
    }else{
        console.log("Wear sun glasses");
    }
    // == checks for equality
    // === checks for equality and data type
*/


/*

        // Functions

    function sayMyName(a){
        // Using template literals
        console.log(`Hello ${a}, Nice to meet you`)
        console.log("Hello "+a);
    }

    let sayMyName1 = (a) => {
        console.log(`Hello again ${a}, Nice to meet you`)
    }

    sayMyName("vamshi")
    sayMyName1("sai")

    let sum1 = (a,b) => a+b;

    console.log("Sum using Implicit return of arrow functions: "+sum1(1,4))
*/


/*
    // Arrays
const groceries = ["apple","banana","orange"]
console.log(groceries)
console.log("Element 0: "+groceries[0])
groceries.push("cookie")
console.log("After addition: "+groceries)
console.log("Slice of (0,2): "+groceries.slice(0,2))
console.log("Slice of (2,last(arr.length)): "+groceries.slice(2,groceries.length))
console.log("Index of cookie: "+groceries.indexOf("cookie"))
console.log("Index of mango: "+groceries.indexOf("mango"))
*/


/*


person = {
    fullName : "Sai Vamshi",
    age : 10
}
console.log("Name: "+person.fullName);
console.log("Age: "+person.age);

console.log("using [] for printing: "+person["fullName"])

person.phone = "09843438743"
console.log(person)
console.log("Phone: "+person.phone)
person["Address"] = "Hyd"
console.log(person)

cricketer = {
    Name : "Dhoni",
    number : 7
}
console.log("Name is: "+cricketer["Name"])

const func = (fullName,age) => {
    person = {
        fullName : fullName,
        age : age
    }
    return `Hi my name is ${person["fullName"]} and my age is ${person.age}`
}
console.log(func("Vamshi",10))



const func1 = (fullName,age,assests,debt) => {
    person = {
        fullName : fullName,
        age : age,
        assests : assests,
        debt : debt,
        netWorth : function (){
            return this.assests - this.debt
        }
    }
    console.log("Networth of person is: "+person.netWorth())
}
func1("Sai vamshi",10,1000,20)
*/

