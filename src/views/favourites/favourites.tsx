import React from 'react'
// import { findRenderedComponentWithType } from 'react-dom/test-utils';
import { Page } from '../../components/page'
import { Title } from '../../components/title'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import PokemonProfile from './PokemonProfile';

// const examplePokemon = {
//   id: 1,
//   name: "bulbasaur",
//   avatar:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/1.png",
//   types: [
//     {
//       slot: 1,
//       type: {
//         name: "grass",
//         url: "https://pokeapi.co/api/v2/type/12/",
//       },
//     },
//     {
//       slot: 2,
//       type: {
//         name: "poison",
//         url: "https://pokeapi.co/api/v2/type/4/",
//       },
//     },
//   ],
// };

export const Favourites = () => {
  const [favourites] = useLocalStorage('favourite-pokemons', [] as any);

  return (
    <Page>
      <Title>Favourites</Title>
        <div className="pokemons-fav-list-wrapper mt-8 poke-font text-xs">
          { favourites.length ? favourites.map((favourite: any) => 
            <PokemonProfile 
              key={`${favourite.name} - ${favourite.id}`} 
              name={favourite.name}
              types={favourite.types}
              avatar={favourite.avatar}
              id={favourite.id} 
            />
          ) : 
          (<div className="poke-font text-white text-center mt-7">There are no pokemons in your favourites list</div>)
          }
        </div>

      {/* <p className="text-white py-6 text-center">
        Here will be list of saved pokemons from localStorage
      </p>

       <ol className="text-white list-decimal">
        <p className="font-bold">What you need to do</p>
        <li>
          Import hook `useLocalStorage` and use it to consume data from localStorage, it's fairly straightforward. Think of it as `useState`, in case of any problems don't hesitate to ask me for help
        </li>
        <li>
          Use loaded data to display list of pokemons added to localStorage. If there is no pokemon in localStorage display message "There is no pokemons in your favourties list "
        </li>
        </ol>

      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
        <PokemonProfile
          name={examplePokemon.name}
          types={examplePokemon.types}
          avatar={examplePokemon.avatar}
          number={examplePokemon.id}
        />
      </div> */}
    </Page>
  );
}

// const PokemonProfile = ({number, name, types, avatar}) => {

// return (
//   <figure className="max-w-xs bg-gray-100 rounded-xl p-4">
//     <img
//       className="w-32 h-32 rounded-full mx-auto"
//       src={avatar}
//       alt=""
//       width="384"
//       height="512"
//     />
//     <div className="pt-4 text-center">
//       <figcaption className="font-medium">
//         <div className="text-cyan-600">#{number} {name}</div>
//         <div className="text-gray-500">{types.map(({type}) => type.name).join(', ')}</div>
//       </figcaption>
//     </div>
//   </figure>
// );
// }
