import { RECEIVE_POKE } from '../actions/pokemon_actions';

const itemReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = {};
    switch (action.type) {
        case RECEIVE_POKE:
            return  Object.assign(nextState, state, action.payload.items);
        default:
            return state;
    }
}

export default itemReducer;