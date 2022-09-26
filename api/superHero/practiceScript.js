let randomHeroBtn = document.getElementById('newHeroButton')
let heroImg = document.getElementById('heroImage')

const BASE_URL = 'https://akabab.github.io/superhero-api/api/id/'
function getStats(json){
    let statsHTML = '';
    for(let key in json){
        console.log(key,json[key])
        statsHTML += `<p><b>${key.toUpperCase()}</b> : ${json[key]}</p>`
    }
    return statsHTML
}
function fetchRandomHero(id){
    let str = `${BASE_URL}${id}.json`
    console.log(str)
    fetch(str)
    .then(response => response.json())
    .then(json => {
        let heroName = json.name;
        let heroStats = getStats(json.powerstats)
        heroImg.innerHTML = `<h1>${heroName}</h1><br><img src = "${json.images.md}" height = "200" width = "200"/><br>${heroStats}`
    })
}

function getRandomNumber(){
    return Math.floor(Math.random()*300) + 1
}

randomHeroBtn.onclick = () =>{
    fetchRandomHero(getRandomNumber())
}