import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"

interface IPokemonProps {
    id: number | string,
    pokemons: {
        name: string
    }
}

const PokemonsList = ({ pokemons, id }: IPokemonProps) => {
    // console.log(pokemons)

    const [pokemonPic, setPokemonPic] = useState('');
    const [pokemonID, setPokemonID] = useState<number>();

    useEffect(() => {
       axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
            // console.log(res.data)
            setPokemonPic(res.data.sprites.front_default);
            setPokemonID(res.data.id);
        })
    }, [id]);

    return ( 
        <Link to={`/pokemons/${pokemonID}`}>
            <figure className="pokemon-card max-w-xs bg-gray-100 rounded-xl p-4 poke-font hover:bg-red-700 cursor-pointer">
                <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={pokemonPic}
                    alt="Pokemon Avatar"
                />
                <div className="pt-4 text-center">
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">#{pokemonID}</div>
                        <div className="text-cyan-600">{pokemons.name}</div>
                    </figcaption>
                </div>
            </figure> 
        </Link>
     );
}
 
export default PokemonsList;