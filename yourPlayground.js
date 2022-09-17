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


/*

const groceries = ['apple','banana','mango','orange']
for(let i = 0;i < groceries.length;i++){
    console.log(groceries[i])
}

console.log("New Way of printing using of: ")
for(let grocery of groceries){
    console.log(grocery)
}

console.log("Other way of printing using in:")
for(let grocery in groceries){
    console.log(groceries[grocery])
}

function squareAll(arr){
    const newArr = [];
    for(let num of arr){
        newArr.push(num**2)
    }
    return newArr
}
arr = [1,2,3,4]
console.log(squareAll(arr))

*/

/*
    
const addAll = (arr) => {
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}

console.log("Sum of array: "+addAll([1,2,3,4,5]))


const findMax = (arr) => {
    let maxVal = arr[0];
    for(let num of arr){
        if(maxVal < num){
            maxVal = num;
        }
    }
    return maxVal;
}

console.log("Max of array: "+findMax([1,2,3,4,5]))

const func = (sentence) => {
    let result = {}
    for(let ch of sentence){
        if(result[ch] == 1){
            result[ch]++;
        }else{
            result[ch] = 1
        }
    }
    return result
}
console.log(func("aabbccddd abab"))
console.log("Other way:")

const func1 = (sentence) => {
    let result = {}
    for(let ch of sentence){
        if(ch in result){
            result[ch]++;
        }else{
            result[ch] = 1;
        }
    }
    return result
}
console.log(func1("aabbccddd abab"))


const wordFreq = (sentence) => {
    let result = {}
    let idx = 0
    let word = ''
    while(idx < sentence.length){
        if(sentence[idx] == ' '){
            if(word in result){
                result[word]++;
            }else{
                result[word] = 1
            }
            idx++;
            word = ''
        }else{
            word = word + sentence[idx]
            idx++;
        }
    }
    if(word !== ''){
        if(word in result){
            result[word]++;
        }else{
            result[word] = 1
        }
    }
    return result
}
console.log(wordFreq("hi hello hi hi hello hey"))


const wordFreq1 = (sentence) => {
    let words = sentence.split(' ')
    let result = {}
    for(let word of words){
        if(word in result){
            result[word]++;
        }else{
            result[word] = 1;
            
        }
    }
    return result;
}

console.log(wordFreq1("hi hello hi hi hello hey"))


const userInput = prompt("Enter sentence")
console.log(wordFreq1(userInput))

*/





