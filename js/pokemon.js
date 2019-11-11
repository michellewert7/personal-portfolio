async function getPokeData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
}

getPokeData()