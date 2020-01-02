import { connect } from 'react-redux';
import { requestPoke} from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => ({
    // piece of state that container subscribes to
    poke: state.entities.pokemon[ownProps.match.params.pokemonId]
});

const mapDispatchToProps = (dispatch) => ({
    requestPoke: (id) => dispatch(requestPoke(id))// dispatch requestAllPokemon action.
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonDetail);