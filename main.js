import { senators } from "./senators.js"

console.log(senators[0].results[0].members)

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

let allSenators = []
let simpleSenators = []

const theData = getAPIData('./senators copy.json').then(data => {
    allSenators = data.results[0].members
    console.log(allSenators)
    //populateDOM(allSenators)
    simpleSenators = mapSenators(allSenators)
    getOldestSenator(simpleSenators)
    populateDOM(simpleSenators)
})

const republicans = allSenators.filter(senator => senator.party === 'R')
const democrats = allSenators.filter(senator => senator.party === 'D')

console.log(republicans, democrats)

// map example

function mapSenators(allOfThem) {
    const resultMap = allOfThem.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.last_name}`,
            party: senator.party,
            birth_date: senator.date_of_birth,
            age: _calculateAge(new Date(senator.date_of_birth)),
            gender: senator.gender
        }
    })
    return resultMap
}

console.log(simpleSenators)

//reduce example

const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

const testReduce = testArray.reduce((acc, num) => {
    return acc + num
}, 0)

function getOldestSenator(arrayOfSenators) {
    return arrayOfSenators.reduce((oldest, senator) => {
        return (oldest.age || 0) > senator.age ? oldest : senator
    }, {})
}












const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    senatorArray.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')
        let cardFigure = document.createElement('figure')
        //cardFigure.setAttribute('class', 'image is-4by3')
        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
        figureImage.alt = "Placeholder Image"

        cardFigure.appendChild(figureImage)
        cardImage.appendChild(cardFigure)
        card.appendChild(cardImage)
        card.appendChild(populateCardContent(senator))
        container.appendChild(card)
    })

}

function populateCardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-96x96')
    let figureImage = document.createElement('img')
    if (senator.party === "R") {
        figureImage.src = `/images/Elephant.png`
    };
    if (senator.party === "D") {
        figureImage.src = `/images/Donkey.png`
    }
    figureImage.alt = "Placeholder Thumbnail"
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = `${senator.name}`
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')
    subtitleP.textContent = `${senator.birth_date} Age: ${senator.age}`

    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'content')
    contentDiv.textContent = ``
    let contentBreak = document.createElement('br')
    let timeSection = document.createElement('time')
    let newDate = new Date()
    timeSection.dateTime = `${newDate}`
    timeSection.textContent = `${newDate}`

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(figureImage)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    contentDiv.appendChild(contentBreak)
    contentDiv.appendChild(timeSection)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)
    return cardContent
}

function _calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//console.log(_calculateAge(new Date('1940-07-03'))








// <div class="card">
//     <div class="card-image">
//         <figure class="image is-4by3">
//             <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
//   </figure>
// </div>
//         <div class="card-content">
//             <div class="media">
//                 <div class="media-left">
//                     <figure class="image is-48x48">
//                         <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
//       </figure>
//     </div>
//                     <div class="media-content">
//                         <p class="title is-4">John Smith</p>
//                         <p class="subtitle is-6">@johnsmith</p>
//                     </div>
//                 </div>

//                 <div class="content">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//     Phasellus nec iaculis mauris. <a>@bulmaio</a>.
//     <a href="#">#css</a> <a href="#">#responsive</a>
//                     <br>
//                         <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
//   </div>
//                 </div>
//             </div>