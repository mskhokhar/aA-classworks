import React from 'react';
import ReactDOM from 'react-dom';
import {requestAllPokemon, requestPoke} from './actions/pokemon_actions';
import {fetchPoke} from './util/api_util';
import { HashRouter, Route } from "react-router-dom";
import configureStore from './store/store';
import { selectAllPokemon} from './reducers /selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();

    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    window.requestPoke = requestPoke;
    window.fetchPoke = fetchPoke;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    ReactDOM.render(<Root store={store}/>, rootEl);
});