import React from 'react';
import { Link } from "react-router-dom";

class PokemonIndexItem extends React.Component {

    render(){
        const { pokemon } = this.props;
        return(
            <li>
                <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                <img src={pokemon.image_url}/>
            </li>
        )
    }
}
export default PokemonIndexItem;