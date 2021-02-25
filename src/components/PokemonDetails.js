import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Page } from "../components/page";
import { Title } from "./title";

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => {
                // console.log(res.data)
                setPokemonData(res.data);
                setIsLoading(false);
                setError(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
                setErrorMessage('Pokemon not found!');
                setIsLoading(false)
            })
    }, [id]);

    return (
        <Page>
            <div className="pokemon-details-wrapper text-white poke-font">
                { error ? (<p className="poke-font py-6 text-center">{ errorMessage }</p>) : null }
                { isLoading && <p className="text-white poke-font py-6 text-center">Loading...</p> }
                {pokemonData && (
                    <div className="pokemon-details-card bg-red-700">
                        <Title>#{pokemonData.id}: {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</Title>
                        <div className="images">
                            <img src={pokemonData.sprites.front_default} alt="pokemon image" />
                        </div>
                        <div className="pokemon-details-card-text">
                            <h3>Pokemon Info</h3>
                            <p>Species: </p>
                            <p>Height: {Math.round(pokemonData.height) / 10} m</p>
                            <p>Weight: {Math.round(pokemonData.weight) / 10} kg</p>
                            <p>Types: </p>
                        </div>
                    </div>
                )}
            </div>
        </Page> 
     );
}
 
export default PokemonDetails;