
function findRandom(arr){
    let randomIdx = Math.floor(Math.random()*arr.length)
    return arr[randomIdx]
}

let arr = ["dhoni","virat","rohit","rahul"]
console.log(findRandom(arr))
