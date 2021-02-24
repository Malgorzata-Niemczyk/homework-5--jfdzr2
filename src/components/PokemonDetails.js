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
            </div>
        </Page> 
     );
}
 
export default PokemonDetails;