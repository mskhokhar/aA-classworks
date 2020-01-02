import * as PokemonAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
});

export const receivePoke = payload => ({
    type: RECEIVE_POKE,
    payload
});


export const requestAllPokemon = () => dispatch => (
   PokemonAPIUtil.fetchAllPokemon().then(response => {
       dispatch(receiveAllPokemon(response));
   })
);

export const requestPoke = (pokeId) => dispatch => (
    PokemonAPIUtil.fetchPoke(pokeId)
        .then(response => {
            dispatch(receivePoke(response));
        } )
);