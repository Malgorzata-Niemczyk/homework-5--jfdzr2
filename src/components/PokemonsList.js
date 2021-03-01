import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"

const PokemonsList = ({ pokemons, index }) => {
    // console.log(pokemons)

    const [pokemonPic, setPokemonPic] = useState('');

    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.name}`)
        .then(res => {
            setPokemonPic(res.data.sprites.front_default)
        })
    }, [pokemons]);

    return ( 
        <Link to={`/pokemons/${index + 1}`}>
            <figure className="pokemon-card max-w-xs bg-gray-100 rounded-xl p-4 poke-font hover:bg-red-700 cursor-pointer">
                <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={pokemonPic}
                    alt="Pokemon Avatar"
                />
                <div className="pt-4 text-center">
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">#{index + 1}</div>
                        <div className="text-cyan-600">{pokemons.name}</div>
                    </figcaption>
                </div>
            </figure> 
        </Link>
     );
}
 
export default PokemonsList;