// ESERCIZIO 1

let pokemonString = '[{ "id": "001", "name": "Bulbasaur", "type": "grass/poison" },{"id": "002","name": "Ivysaur","type": "grass/poison"},{"id": "003","name": "Venusaur","type": "grass/poison"},{"id": "004","name": "Charmander","type": "fire"},{"id": "005","name": "Charmeleon","type": "fire"},{"id": "006","name": "Charizard","type": "fire/flying"},{"id": "007","name": "Squirtle","type": "water"},{ "id": "008", "name": "Wartortle", "type": "water" }, { "id": "009", "name": "Blastoise", "type": "water" }]'
let pokemons = JSON.parse(pokemonString)

for (let pokemon of pokemons) {
    console.log(`The pokemon with id number ${pokemon.id} is ${pokemon.name} with type ${pokemon.type}`)
}

localStorage.setItem('pokemons', pokemonString)


// ESERCIZIO 2

let counterDiv = document.getElementById('counter')
let counter = 0

onload = function () {
    let savedNumb = sessionStorage.getItem('counterN')
    console.log("bla")
    if (savedNumb !== null) {
        counter = JSON.parse(savedNumb)
        counterDiv.innerHTML = counter
    }
}

function startCounter() {
    counter++
    counterDiv.innerHTML = counter
    let counterNumb = JSON.stringify(counter)
    sessionStorage.setItem('counterN', counterNumb)
}