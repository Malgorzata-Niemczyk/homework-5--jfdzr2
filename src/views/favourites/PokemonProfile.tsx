import { Link } from "react-router-dom";

interface IPokemonProfileProps {
    id: string | number,
    name: string,
    avatar: string,
    types: []
}

const PokemonProfile = ({id, name, avatar, types}: IPokemonProfileProps) => {
    return ( 
        <Link to={`/pokemons/${id}`}>
            <figure className="pokemon-card max-w-xs bg-gray-100 rounded-xl p-4 hover:bg-red-700 cursor-pointer">
                <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={avatar}
                    alt="Pokemon Avatar"
                    width="384"
                    height="512"
                />
                <div className="pt-4 text-center">
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">#{id} {name}</div>
                        <div className="text-gray-500">{types.map(({type}: any) => type.name).join(', ')}</div>
                    </figcaption>
                </div>
            </figure> 
        </Link>
     );
}
 
export default PokemonProfile;