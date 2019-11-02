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


people.forEach(function(person){
    let personDiv = document.createElement ('div')
    let name = document.createElement('h3')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

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

const maleCharacters = people.filter (person => person.gender === 'male')
const femaleCharacters = people.filter (person => person.gender === 'female')
const otherCharacter = people.filter (person => person.gender !== 'female' && person.gender !== 'male')
const allDivs = Array.from(mainArea.querySelectorAll('div'))

let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', event => {
    maleCharacters.forEach(elt =>{
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        }) 
        console.log(matchedDiv)
        matchedDiv[0].setAttribute("style","display: none;")
    }) 
    femaleCharacters.forEach(elt=> {
        //elt.setAttribute("style", "visibility: hidden;")
    })
})
let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', event => {

})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
