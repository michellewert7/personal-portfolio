import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

let mainArea = document.querySelector('main')
let mainHeader = document.querySelector('header')

/* films.forEach(function(film){
    let filmDiv = document.createElement('div')
    let title = document.createElement('h1')
    let crawl = document.createElement('p') 

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = film.title
    crawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
}); */

const maleCharacters = people.filter (person => person.gender === 'male')

maleCharacters.forEach(function(person){
    let personDiv = document.createElement ('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    personDiv.setAttribute('class', 'charDivs') 
    pic.setAttribute('class', 'picDivs')

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}


const femaleCharacters = people.filter (person => person.gender === 'female')
const otherCharacter = people.filter (person => person.gender !== 'female' && person.gender !== 'male')
const allDivs = Array.from(mainArea.querySelectorAll('div'))

let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', event => {
    femaleCharacters.forEach(elt =>{
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        }) 
    if(matchedDiv.getAttribute("style") === "display: none;") {
        matchedDiv.setAttribute("style", "display: revert;")
    }   else {
    matchedDiv.setAttribute("style","display: none;")
    }
    })
})
let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', event => {
    femaleCharacters.forEach(elt=> {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
    })
    matchedDiv[0].setAttribute("style","display: revert;")
    })
})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
