// Reducers, will contain all state manipulation functions
import { PokeState, PokeAction } from '../types';
import {
    GET_POKEMON_LIST_BEGIN,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAIL,
    GET_POKEMON_IMAGE_BEGIN,
    GET_POKEMON_IMAGE_SUCCESS,
    GET_POKEMON_IMAGE_FAIL
} from '../constants';

const defaultState: PokeState = {
    pokemons: {
        results: []
    },
    loading: false,
    error: null
};

function pokeReducer(state: PokeState = defaultState, action: PokeAction): PokeState {
    switch (action.type) {
        case GET_POKEMON_LIST_BEGIN:
            return {
                ...state,
                loading: true
            }
        case GET_POKEMON_LIST_SUCCESS:
        return {
            ...state,
            pokemons: action.payload
        }
        case GET_POKEMON_LIST_FAIL:
        return {
            ...state,
            loading: false
        }
        case GET_POKEMON_IMAGE_BEGIN:
        return {
            ...state
        }
        case GET_POKEMON_IMAGE_SUCCESS:
        console.log(state)
        return {
            ...state,
            pokemons: {
                results: [...state.pokemons.results.map((poke: any) => {console.log(poke); if(poke.name === action.payload.pokemon.name) {poke.imageSource = action.payload.image};console.log(poke); return poke;})]
            }
        }
        case GET_POKEMON_IMAGE_FAIL:
        return {
            ...state,
            loading: false
        }
        default:
        return {
            ...state
        }
    }
}

export {
    pokeReducer
};