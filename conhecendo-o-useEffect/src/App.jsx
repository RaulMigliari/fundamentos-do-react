import { useEffect } from "react"
import { useState } from "react"

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
  const data = await response.json()
  return data.results
}

export default function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetchPokemon().then(result => {
      console.log("Requisição realizada")
      console.log(result)
      setPokemon(result)
    })
  }, [])

  return (
    <div className="app">
      <div>
        <h2>Pokemon</h2>
        <ul className="pokemon">
          {pokemon.map(mon => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button>
                Detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}