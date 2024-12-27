let pokemons = [];
let limit = 30;
let offset = 0;
let BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;


function init() {
    getPokemons();
}

function increasePokemons() {
    offset += limit;
    BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    getPokemons();
}

async function getPokemons() {
    let response = await fetch(BASE_URL);
    let responseToJson = await response.json();
    let newPokemons = [];
    for (let i = 0; i < responseToJson.results.length; i++) {
        let pokemonResponse = await fetch(responseToJson.results[i].url);
        let pokemonToJson = await pokemonResponse.json();
        newPokemons.push(pokemonToJson);
    }
    pokemons = pokemons.concat(newPokemons);
    console.log(pokemons);
    document.getElementById("content").innerHTML += getPokemonsTemplate(newPokemons);
}

function getPokemonsTemplate(pokemons) {
    let template = '';
    if (Array.isArray(pokemons)) {
        pokemons.forEach(pokemon => {
            template += createPokemonHTML(pokemon);
        });
    } else {
        template = `<div class="error">No Pokémon data available</div>`;
    }
    return template;
}

function searchPokemons() {
    let searchInput = document.getElementById("searchInput").value;
    if (searchInput.length >= 3) {
        let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()));
        document.getElementById("content").innerHTML = getPokemonsTemplate(filteredPokemons);
    } else {
        document.getElementById("content").innerHTML = getPokemonsTemplate(pokemons);
    }
}