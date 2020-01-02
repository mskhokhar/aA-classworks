import { RECEIVE_ALL_POKEMON, RECEIVE_POKE } from '../actions/pokemon_actions';

const pokemonReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch(action.type){
        case RECEIVE_ALL_POKEMON:
            let pokemon = action.pokemon;
            return Object.assign(nextState,pokemon);
        case RECEIVE_POKE:
            nextState = Object.assign(nextState, state);
            nextState[action.payload.pokemon.id] = action.payload.pokemon
            return nextState;
        default: 
            return state;
    }
}

export default pokemonReducer;