let pokemons = [];
//ADI aba Al 

async function loadPokemons() {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
    let response = await fetch(url);
    let responseAsJson = await response.json();

    for (let i = 0; i < responseAsJson.results.length; i++) {

        let url = responseAsJson.results[i]['url'];
        let response = await fetch(url);
        let PokemonAsJson = await response.json();

        pokemons.push(PokemonAsJson);
    }git 
    renderPokemons();

}
function renderPokemons() {

    for (let i = 5; i < 8; i++) {
        document.getElementById('pokedex').innerHTML +=
            `<div onclick="openPokemon(${i})"   id="pokekarten-${i}" class="pokekarten">
        <div class="display"><img  id="pokebild-${i}" class="pokebild" ></div>
        <div class="pokename"><h2 id="pokename-${i}" >${pokemons[i]['name']}</h2></div>
        </div>`;
        document.getElementById('pokebild-' + i).src = pokemons[i]['sprites']['other']['dream_world']['front_default'];
    }

}
function openPokemon(i) {
    document.getElementById('pokedex').innerHTML =
        `
       <div class="out" onclick="out()"><</div>
       <img class="pokeBild"  id="pokebild-${i}">
        <div class ="h1Text1"><h1 id="pokename-${i}" >${pokemons[i]['name']}</h1></div>
        <div class="bgcolor">
        
        <span class="margin, bggelb" id ="heit"> Height:  ${pokemons[i]['height']}</span><br>
        <span class="margin bggelb" id ="heit"> Weight:  ${pokemons[i]['weight']}</span><br>
        <span class="margin bggelb" id ="heit"> Order:  ${pokemons[i]['order']}</span>
        
        </div>`;
    document.getElementById('pokebild-' + i).src = pokemons[i]['sprites']['other']['dream_world']['front_default'];

}
function out() {
    document.getElementById('pokedex').innerHTML = '';
    document.getElementById('pokedex').innerHTML = '<h1 class="h1Text">Pokemon</h1>';

    renderPokemons();
}



