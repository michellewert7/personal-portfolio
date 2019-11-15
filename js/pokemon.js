async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokedata => {
                    populateDOM(pokedata)
                    //console.log(pokedata.id)
                    let pokeId = getPokeNumber(pokedata.id)
                    //console.log(pokeId)
                })
        }
    })

//console.log(theData)

let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let pokeDiv = document.createElement('div')
    let name = document.createElement('h4')
    let pic = document.createElement('img')

    pokeDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)
    console.log('id '+pokeNum)

    name.textContent = single_pokemon.name

    // pic.src = `../images/${pokeNum}.png`

    pic.src = `../images/${pokeNum}.png`

    pokeDiv.appendChild(pic)
    pokeDiv.appendChild(name)

    mainArea.appendChild(pokeDiv)
}

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}
