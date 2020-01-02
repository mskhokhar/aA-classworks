import React from 'react';

class PokemonDetail extends React.Component {
    componentDidMount(){
        this.props.requestPoke(this.props.match.params.pokemonId);
    }
    render(){
        console.log('I am in!!!!!!!!!!!!!!!!!!!!!!!!')
        return (
            <div>
                null
            </div>
        )
    }
}

export default PokemonDetail;