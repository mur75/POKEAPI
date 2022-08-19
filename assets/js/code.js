let api_pk = "https://pokeapi.co/api/v2/pokemon"
let consumo_api = fetch(api_pk)
consumo_api.then(res => res.json())
    .then((data_pokemon_url) => {
        let= nombrePokemon = ""
        for (const personajes_pk of data_pokemon_url.results) {
            let consumo_api2 = fetch(personajes_pk.url)
            consumo_api2.then(res2 => res2.json())
            .then((data_pokemon_abilities) => {
                    nombrePokemon = data_pokemon_abilities.name
                    let describaHabilidad = ""
                    let nombreHabilidad  = ""
                    for (const habilidades of data_pokemon_abilities.abilities) {
                        nombreHabilidad += habilidades.ability.name+" "
                        let consumo_api3 = fetch(habilidades.ability.url)
                        consumo_api3.then(res3 => res3.json())
                        .then((description) => {
                            describaHabilidad = description.flavor_text_entries[13].flavor_text
                            console.log(describaHabilidad)
                                                                

                                document.getElementById("cartasPersonajes").innerHTML += `
                                <div class="card" style="width: 18rem;">
                                    <img src="${data_pokemon_abilities.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${nombrePokemon}</h5>
                                        <h6>${nombreHabilidad}</h6>
                                        <p class="card-text">${describaHabilidad} </p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                `
                        })
                    }
                })
        }
    })

