import { Link } from "react-router-dom";

const PokemonProfile = ({id, name, avatar, types}) => {

    return ( 
        <Link to={`/pokemons/${id}`}>
            <figure className="max-w-xs bg-gray-100 rounded-xl p-4">
                <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={avatar}
                    alt=""
                    width="384"
                    height="512"
                />
                <div className="pt-4 text-center">
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">#{id} {name}</div>
                        <div className="text-gray-500">{types.map(({type}) => type.name).join(', ')}</div>
                    </figcaption>
                </div>
            </figure> 
        </Link>
     );
}
 
export default PokemonProfile;