import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

let mainArea = document.getElementById("cards")
let buttonArea = document.getElementById('buttons')

//let mainHeader = document.querySelector('header')

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

const justNames = people.map(person => {
    return { name: person.name, foo: 'bar', config: [{ style: 'something' }, { foo: 'bar' }] }
})

console.log(justNames)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')
const allCharacters = people

//cardBuilder(maleCharacters)
//cardBuilder(femaleCharacters)

//cardBuilder(otherCharacters)
cardBuilder(allCharacters)

const allBtn = document.getElementById('all')
allBtn.addEventListener('click', () => {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
    cardBuilder(allCharacters)
    console.log('test')
})
const femBtn = document.getElementById('female')
femBtn.addEventListener('click', () => {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
    cardBuilder(femaleCharacters)
    console.log('test')
})
const maleBtn = document.getElementById('male')
maleBtn.addEventListener('click', () => {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
    cardBuilder(maleCharacters)
    console.log('test')
})
const otherBtn = document.getElementById('other')
otherBtn.addEventListener('click', () => {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
    cardBuilder(otherCharacters)
    console.log('test')
})

// const starshipsBtn = 
// starshipBtn.addEventListener('click', '.')

// const otherBtn = document.getElementById('all')
// otherBtn.addEventListener( 'click',() => {
//     cardBuilder(otherCharacters)
//     console.log('test')
// })


// while (mainArea.firstChild) {
//     mainArea.removeChild(mainArea.firstChild);
//     console.log('delete')
// }

console.log("click")
function cardBuilder(arr) {


    arr.forEach(function (person) {
        let personDiv = document.createElement('div')
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
}

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

let starshipButton = document.querySelector('.ships')
starshipButton.addEventListener('click', starships)

function starships() {
    let url = `starships.js`
    getAPIData(url)
        .then(data => {
            populateDOM(data)
        })
}


//const femaleCharacters = people.filter (person => person.gender === 'female')
//const otherCharacter = people.filter (person => person.gender !== 'female' && person.gender !== 'male')

/* const allDivs = Array.from(buttonArea.querySelectorAll('div'))

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'

maleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        if (matchedDiv.getAttribute("style") === "display: none;") {
            console.log(matchedDiv)
            matchedDiv.setAttribute("style", "display: revert;")
        } else {
            matchedDiv.setAttribute("style", "display: none;")
        }
    })
})
let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.setAttribute("style", "display: revert;")
    })
})
mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)

console.log(otherCharacters) */