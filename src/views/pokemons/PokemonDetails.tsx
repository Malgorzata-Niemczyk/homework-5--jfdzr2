import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Page } from "../../components/page";
import { Title } from "../../components/title";
import { pokemonTypesColors } from "../../components/pokemonTypesColors";
import { useLocalStorage } from "../../hooks/useLocalStorage";

interface IPokemonData {
    id: number,
    name: string,
    species: {
        name: string
    }
    height: number,
    weight: number,
    sprites: {
        front_default: string
    }
    types: [{
        name: string
    }],
    abilities: []
}

const PokemonDetails = () => {
    const { index } = useParams() as {index: string | number};
    const history = useHistory();
    const [pokemonData, setPokemonData] = useState<IPokemonData>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [favourites, setFavourites] = useLocalStorage('favourite-pokemons', [] as any);

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
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
    }, [index]);

    const handleAddToFavPokemons = () => {
        let favPokemonItem = {
            id: pokemonData.id,
            name: pokemonData.name,
            avatar: pokemonData.sprites.front_default,
            types: pokemonData.types
        };

        if (favourites.length > 5) {
            favourites.shift()
        };

        setFavourites([...favourites, favPokemonItem]);
    }

    return (
        <Page>
            <button className="poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" style={{textTransform: "uppercase"}} onClick={() => history.push('/pokemons')}>
                ◀️ Back to Pokemons List
            </button>
            <div className="pokemon-details-wrapper text-white poke-font">
                { error ? (<p className="poke-font py-6 text-center">{ errorMessage }</p>) : null }
                { isLoading && <p className="text-white poke-font py-6 text-center">Loading...</p> }
                {pokemonData && (
                    <div className="pokemon-details-card bg-red-700">
                        <div className="pokemon-details-title">
                            <Title>#{pokemonData.id}: {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</Title>
                            { favourites.map((favourite: any) => favourite.name).includes(pokemonData.name) ? 
                                (<button 
                                    className="poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" 
                                    style={{
                                        textTransform: "uppercase",
                                        color: "grey",
                                        cursor: "not-allowed"
                                    }}
                                    disabled={true}
                                >
                                    Added To 🖤
                                </button>) :
                                (<button 
                                    className="poke-font bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" 
                                    style={{textTransform: "uppercase"}}
                                    onClick={handleAddToFavPokemons}
                                    >
                                     Add To ❤️
                                </button>)                  
                            }
                        </div>
                        <div className="images">
                            <img src={pokemonData.sprites.front_default} alt="pokemon avatar" />
                        </div>
                        <div className="pokemon-details-card-text">
                            <h3>Pokemon Info</h3>
                            <p>Species: <span style={{color: 'lightskyblue'}}>{pokemonData.species.name}</span></p>
                            <p>Height: {Math.round(pokemonData.height) / 10} m</p>
                            <p>Weight: {Math.round(pokemonData.weight) / 10} kg</p>
                            <p>Types:</p>
                            <div className="pokemon-details-types-info">
                                {pokemonData.types.map((typeItem: any) => {
                                    return <span style={{backgroundColor: pokemonTypesColors[typeItem.type.name]}} key={typeItem.type.name}>
                                            {`${typeItem.type.name}`}
                                        </span>
                                })} 
                            </div>
                            <p>Abilities:</p>
                            <div className="pokemon-details-abilities-info">
                                {pokemonData.abilities.map((abilityItem: any) => {
                                    return <span key={abilityItem.ability.name}>
                                            {`${abilityItem.ability.name}`}
                                        </span>
                                })} 
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Page> 
     );
}
 
export default PokemonDetails;