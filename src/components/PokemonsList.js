import { useState, useEffect } from 'react';
import axios from "axios";

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
       <li className="pokemon-card poke-font hover:bg-red-700 cursor-pointer">
            <img src={pokemonPic} alt="Pokemon image" />
            <p>#{index + 1}</p>
            <p>{pokemons.name}</p>
       </li>
     );
}
 
export default PokemonsList;