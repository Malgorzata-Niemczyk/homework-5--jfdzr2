import { Page } from "../../components/page";
import { Title } from "../../components/title";
// import { pokeApiResponse } from "../../utils/sampleResponse";
import { useState, useEffect } from 'react';
import PokemonsList from "../../components/PokemonsList"
import axios from "axios";

export function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  useEffect(() => {
    axios.get(currentPageUrl)
      .then(res => {
        setPokemons(res.data.results)
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err)
        setError(true);
        setErrorMessage('Could not fetch the data :(')
        setIsLoading(false);
      })
  }, []);

  return (
    <Page>
      <Title>Pokemons list</Title>
        { error ? (<p className="text-white poke-font py-6 text-center">{ errorMessage }</p>) : null }
        { isLoading && <p className="text-white poke-font py-6 text-center">Loading...</p> }
        <ol className="pokemons-list-wrapper">
          { pokemons && pokemons.map((pokemon, index) =>
            <PokemonsList key={`${pokemon.name} - ${index + 1}`} pokemons={pokemon} index={index} /> )}
        </ol>
        
      {/* <p className="text-white py-6 text-center">
        Here will be list of pokemons from pokeapi
      </p>
      <ol className="text-white list-decimal">
        <p className="font-bold">What you need to do</p>
        <li>
          Call pokeapi inside useEffect (remember to not cause infinite loop
          because you'll break pokeapi!) and save the response in state
          (useState)
        </li>
        <li>
          Display list of pokemons (pokeapi uses pagination so keep that in
          mind) like example below
        </li>
        <li>
         [Extra] Add buttons PREVIOUS - NEXT at the bottom so I can load next batch of pokemons
        </li>
        <li>
          Handle states:
          <p>Initial</p>
          <p>Loading</p>
          <p>Loaded</p>
          <p>Error</p>
        </li>
        <li>
          Create pokemon profile page, so when I click on selected pokemon I go
          to the specific page where I can see more details about pokemon
          (pokemonId, name, types and avatar). Refer to Favourites, you'll see
          an example. Remember about react-router you have to create new route
          for this and create separate component and separate Route.
        </li>
        <li>
          In detailed view I want to have{" "}
          <span className="font-bold">ADD TO FAVOURITE </span>button which will
          save selected pokemon to{" "}
          <span className="font-bold">localStorage</span> so later I can display
          it in Favourite component.
          [Extra] Maximum of 6, meaning if I add 7th pokemon
          the first one gets removed from the localStorage
        </li>
      </ol>
      <p className="text-white py-2">
        Example of what I want to see here is something like this
      </p>
      <ol className="poke-font text-white grid grid-cols-2 grid-flow-row-dense gap-1">
        {pokeApiResponse.map((pokemon, index) => (
          <li
            key={pokemon - index}
            className={`hover:bg-red-700 cursor-pointer ${
              index < 10 ? "col-start-1" : "col-start-2"
            }`}
          >
            #{index + 1} - {pokemon.name}
          </li>
        ))}
      </ol> */}
    </Page>
  );
}
