
function consumoPokeAPI(api_pk) {
    document.getElementById("cartasPersonajes").innerHTML = ""
    //let api_pk = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50"
    let consumo_api = fetch(api_pk)
    consumo_api.then(res => res.json())
        .then((data_pokemon_url) => {
            let = nombrePokemon = ""
            for (const personajes_pk of data_pokemon_url.results) {
                let consumo_api2 = fetch(personajes_pk.url)
                consumo_api2.then(res2 => res2.json())
                    .then((data_pokemon_abilities) => {
                        let vida = data_pokemon_abilities.stats[0].base_stat
                        let ataque = data_pokemon_abilities.stats[1].base_stat
                        let defensa = data_pokemon_abilities.stats[2].base_stat
                        let nombre_hp = data_pokemon_abilities.stats[0].stat.name
                        let nombre_ataque = data_pokemon_abilities.stats[1].stat.name
                        let nombre_defensa = data_pokemon_abilities.stats[2].stat.name

                        let describaHabilidad = ""
                        let nombreHabilidad = ""
                        for (const habilidades of data_pokemon_abilities.abilities) {
                            nombreHabilidad += habilidades.ability.name + " "
                            let consumo_api3 = fetch(habilidades.ability.url)
                            consumo_api3.then(res3 => res3.json())
                                .then((description) => {
                                    describaHabilidad = description.flavor_text_entries[13].flavor_text
                                    //console.log(describaHabilidad)


                                    document.getElementById("cartasPersonajes").innerHTML += `
                                    <div class="card" style="width: 18rem;">
                                        <img src="${data_pokemon_abilities.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${data_pokemon_abilities.name}</h5>
                                            <h6>${nombreHabilidad}</h6>
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_hp}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${vida}%;" aria-valuenow="${vida}" aria-valuemin="0" aria-valuemax="100">${vida}%</div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_ataque}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${ataque}%;" aria-valuenow="${ataque}" aria-valuemin="0" aria-valuemax="100">${ataque}%</div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_defensa}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${defensa}%;" aria-valuenow="${defensa}" aria-valuemin="0" aria-valuemax="100">${defensa}%</div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <p class="card-text">${describaHabilidad} </p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    `
                                })
                        }
                    })
            }
            botonesPaginacion(data_pokemon_url.previous, data_pokemon_url.next)
        })

}

function botonesPaginacion(urlAnterior, urlSiguiente) {

    let pokePaginacion = document.getElementById("pokePaginacion")
    pokePaginacion.innerHTML = ""
    let botonAnterior = document.createElement("button")
    if (urlAnterior != null) {
        botonAnterior.setAttribute("onclick", `consumoPokeAPI("${urlAnterior}")`)
    } else {
        botonAnterior.setAttribute("disabled", ``)
    }

    botonAnterior.classList.add("btn", "btn-outline-warning")
    botonAnterior.innerText = "Anterior"
    pokePaginacion.appendChild(botonAnterior)

    let botonSiguiente = document.createElement("button")
    if (urlSiguiente != null) {
        botonSiguiente.setAttribute("onclick", `consumoPokeAPI("${urlSiguiente}")`)
    } else {
        botonSiguiente.setAttribute("disabled", ``)

    }
    botonSiguiente.classList.add("btn", "btn-outline-warning")
    botonSiguiente.innerText = "Siguiente"
    pokePaginacion.appendChild(botonSiguiente)


}

consumoPokeAPI("https://pokeapi.co/api/v2/pokemon")

document.getElementById("btnBuscar").addEventListener("click", () => {
    document.getElementById("cartasPersonajes").innerHTML = ""
    let usuarioBuscar = document.getElementById("usuarioBuscar").value
    let consumo_api = fetch("https://pokeapi.co/api/v2/pokemon/" + usuarioBuscar)
    consumo_api.then(res => res.json())
        .then((data_pokemon_abilities) => {
            let vida = data_pokemon_abilities.stats[0].base_stat
            let ataque = data_pokemon_abilities.stats[1].base_stat
            let defensa = data_pokemon_abilities.stats[2].base_stat
            let nombre_hp = data_pokemon_abilities.stats[0].stat.name
            let nombre_ataque = data_pokemon_abilities.stats[1].stat.name
            let nombre_defensa = data_pokemon_abilities.stats[2].stat.name

            let describaHabilidad = ""
            let nombreHabilidad = ""
            for (const habilidades of data_pokemon_abilities.abilities) {
                nombreHabilidad += habilidades.ability.name + " "
                let consumo_api3 = fetch(habilidades.ability.url)
                consumo_api3.then(res3 => res3.json())
                    .then((description) => {
                        describaHabilidad = description.flavor_text_entries[13].flavor_text
                        
                        document.getElementById("cartasPersonajes").innerHTML += `
                                    <div class="card" style="width: 18rem;">
                                        <img src="${data_pokemon_abilities.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${data_pokemon_abilities.name}</h5>
                                            <h6>${nombreHabilidad}</h6>
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_hp}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${vida}%;" aria-valuenow="${vida}" aria-valuemin="0" aria-valuemax="100">${vida}%</div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_ataque}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${ataque}%;" aria-valuenow="${ataque}" aria-valuemin="0" aria-valuemax="100">${ataque}%</div>
                                                    </div>
                                                </div>
                                            </div>
    
                                            <div class="row">
                                                <div class="col-3">
                                                    <label for="">${nombre_defensa}</label>
                                                </div>
                                                <div class="col-9">
                                                    <div class="progress">
                                                        <div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: ${defensa}%;" aria-valuenow="${defensa}" aria-valuemin="0" aria-valuemax="100">${defensa}%</div>
                                                    </div>
                                                </div>
                                            </div>
                        
                                            <p class="card-text">${describaHabilidad} </p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    `
                    })
            }
        })
    })
