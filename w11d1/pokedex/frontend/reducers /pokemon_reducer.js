import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            let pokemon = action.pokemon;
            return Object.assign(nextState,pokemon);
        default: 
            return state;
    }
}

export default pokemonReducer;