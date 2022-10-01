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


/*

// Higher Order functions 
// map returns an array
let a = [1,2,3,4]
function doubleNums(x){
    return x*2;
}

let doubleArray = a.map(doubleNums)
console.log(doubleArray)

console.log("Other way:\n")
let doubleArray1 = a.map((x) => {
    return 2*x
})
console.log(doubleArray1)

console.log("Other way:\n")
let doubleArray2 = a.map((x) => (2*x))
console.log(doubleArray2)

console.log("Filter\n")
let b = [1,2,3,4,5,6]
function odd(x){
    if(x%2 != 0){
        return true
    }
    return false
}
const oddVals = b.filter(odd)
console.log(oddVals)

console.log("Other way:\n")
const oddVals1 = b.filter((x) => {
    if(x%2 !=0){
        return true
    }
    return false
})

console.log(oddVals1)

console.log("Other way:\n")
const oddVals2 = b.filter((x) => x%2)

console.log(oddVals2)

console.log("Reduce\n")

let arr = [1,3,4,5]
function sum(acc,cur){
    acc += cur;
    return acc
}

let sumArr = arr.reduce(sum)
console.log(sumArr)

console.log("Other way:\n")
let sumArr1 = arr.reduce((acc,cur) =>{
    acc += cur
    return acc
},0)

console.log(sumArr1)

let maxArr = arr.reduce((acc,cur) =>{
    if(acc < cur){
        acc = cur;
    }
    return acc;
},arr[0])

console.log(maxArr)

*/

/*

// Execises
let a = [1,2,3,4,5,6]
let filterArr = a.filter((x) =>{
    if(x > 3){
        return true
    }
    return false
})
console.log(filterArr)


const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

const fullNames = users.map((user) => {
    return user.firstName + " " + user.lastName
})

console.log("Full Names: "+fullNames)

const ageDict = users.reduce((acc,user) => {
    if(user.age in acc){
        acc[user.age]++;
    }else{
        acc[user.age] = 1
    }
    return acc
},{})
console.log(ageDict)

const filterByAge = users.filter((user) => {
    if(user.age < 30){
        return true
    }
    return false
}).map((user) => {
    return user.firstName
})
console.log(filterByAge)

*/

/*
console.log("hello from yourPlayground.js")

let title = document.getElementById("projectTitle");
console.log("Previous title: "+title.innerHTML)
title.innerHTML = "Modified new title"
console.log("Previous new title: "+title.innerHTML)

let subTitle = document.getElementById("subTitle");
console.log("Previous Sub title: "+subTitle.innerText)

subTitle.innerHTML = `<h3>Modified Sub title</h3>`
console.log("Modified Sub title: "+subTitle.innerText)
// innerHTML will be replacing all the html inside the div "subTitle" with what we have given
let nameVal = prompt('Enter Name: ')
let nameElement = document.getElementById("name");
nameElement.innerText = nameVal;

console.log("Previous Color: "+nameElement.style.color)
nameElement.style.color = 'red'
console.log("Modified Color: "+nameElement.style.color)

console.log("Previous background color: "+nameElement.style.backgroundColor)
nameElement.style.backgroundColor = 'pink'
console.log("Modified background color: "+nameElement.style.backgroundColor)

*/

/*

let redDiv = document.getElementById("redSquare");
let blueDiv = document.getElementById("blueSquare");
let blackDiv = document.getElementById("blackSquare");

redDiv.onclick = function(){
    console.log("Red clicked")
}

blueDiv.onclick = () => {
    console.log("Blue clicked")
}

blackDiv.onclick = function() {
    console.log("black clicked")
}

*/

/*

let allButtons = document.getElementsByClassName("buttonClick");

for(let button of allButtons){
    if(button.style.backgroundColor === 'red'){
        button.onclick = () =>{
            console.log("red button click")
        }
    }else if(button.style.backgroundColor === 'black'){
        button.onclick = () => {
            console.log("black button click")
        }
    }else if(button.style.backgroundColor === 'blue'){
        button.onclick = () => {
            console.log("blue button click")
        }   
    }
    
}


*/



/*
let allColorBtns = document.querySelectorAll(".buttonClick");
// .buttonClick is used as it is a class otherwise querySelector would be selecting HTML elements
for(let button of allColorBtns){
    button.onclick = () =>{
        console.log(button.value)
    }
}
*/


/*
let redCnt = 0;
let blueCnt = 0;
let greenCnt = 0;

let allBtns = document.querySelectorAll('.buttonClick')
for(let btn of allBtns){
    btn.onclick = () =>{
        if(btn.value === 'green'){
            greenCnt++;
            btn.innerHTML = `${greenCnt}`;
        }else if(btn.value === 'red'){
            redCnt++;
            btn.innerHTML = `${redCnt}`;
        }else if(btn.value === 'blue'){
            blueCnt++;
            btn.innerHTML = `${blueCnt}`;
        }
    }
}

let clearGame = document.getElementById('clearGame')
clearGame.onclick = () =>{
    redCnt = 0;
    blueCnt = 0;
    greenCnt = 0;
    for(let btn of allBtns){
        btn.innerHTML = '0'
    }
}


*/


/*
const timesClicked = {
    "red" : 0,
    "blue" : 0,
    "green" : 0
}

let allBtns = document.querySelectorAll('.buttonClick')
for(let btn of allBtns){
    btn.onclick = () => {
        timesClicked[btn.value]++;
        btn.innerHTML = timesClicked[btn.value]
    }
}

let clearBtn = document.getElementById('clearGame')
clearBtn.onclick = () => {
    for(let btn of allBtns){
        timesClicked[btn.value] = 0;
        btn.innerHTML = '0'
    }
}

*/

/*
let dogDiv = document.getElementById('dogImage')
let getNewDog = document.getElementById('getNewDog')

function newDog(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log("JSON Object: "+json)
        console.log("JSON Object Message: "+json.message)
        dogDiv.innerHTML = `<img src='${json.message}' height = "400" width = "400"/>`
    })
}
newDog()
getNewDog.onclick = () => {
    newDog()
}

*/

// console.log("Start convo with Friend")
// setTimeout(() => {
//     console.log("Soup is ready")
// },2000)
// console.log("Continue convo")

// // Soup is ready is printed after 2 seconds meanwhile the other code would still be running

/*
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let r = Math.floor(Math.random()*2)
        let result = r === 1 ? true : false;
        if(result){
            resolve("Your soup is ready");
        }else{
            reject("Your soup is not ready");
        }
    },2000)
})

console.log(
    promise1
    .then((value) => {
        console.log(value)
    })
    .catch((value) => {
        console.log(value)
    })
)

// .then catches a resolve and .catch catches the reject of the promise

*/

/*

console.log("fetch returns a promise and response in the first then also returns a promise: ",
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => console.log(json))
)

// response.json() is also making an API request to convert it into JSON data so it takes time
*/

/*
// Rules for using async/ await
// It must be in a FUNCTION
// Use the async keyword to tell that the function is asynchronous
// Use await when you are waiting for the response

const getRandomDog = async () => {
    let url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getRandomDog()
*/

/*
const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        let r = Math.floor(Math.random()*2)
        let result = r === 1 ? true : false;
        if(result){
            resolve("Your soup is ready")
        }else{
            reject("Your soup is not ready")
        }
    },2000)
})
let tipForWaiter = 0;
let soupAmount = 0;
let review = '';
const getSoup = async () => {
    try{
        const response = await promise1;
        console.log(response)
        tipForWaiter = 10
        soupAmount = 100
        review = 'Good'
    }catch(error){
        console.log(error)
        review = 'Bad'
    }
    console.log("Review: "+review)
}
getSoup()  

*/









