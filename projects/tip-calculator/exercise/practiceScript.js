let numberOfPeople = 1;
let totalAmount = 0;

let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let totalAmountDiv = document.getElementById('perPersonTotal') 
let numberOfPeopleDiv = document.getElementById('numberOfPeople')

function calculateBill(){
    let a = Number(billTotalInput.value);
    let b = Number(tipInput.value);
    totalAmount = a + ((a*b)/100)
    let totalAmountPerPerson = totalAmount/numberOfPeople
    let rounded = Math.round(totalAmountPerPerson*100)/100;
    totalAmountDiv.innerHTML = `$${totalAmountPerPerson.toFixed(2)}`
}

function increasePeople(){
    numberOfPeople++;
    numberOfPeopleDiv.innerHTML = `${numberOfPeople}`
    let totalAmountPerPerson = totalAmount/numberOfPeople
    totalAmountDiv.innerHTML = `$${totalAmountPerPerson.toFixed(2)}`
}

function decreasePeople(){
    if(numberOfPeople !== 1){
        numberOfPeople--;
        numberOfPeopleDiv.innerHTML = `${numberOfPeople}`
        let totalAmountPerPerson = totalAmount/numberOfPeople
        totalAmountDiv.innerHTML = `$${totalAmountPerPerson.toFixed(2)}`
    }else{
        alert('Number of People is atleast 1')
    }
}
