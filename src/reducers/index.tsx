// Reducers, will contain all state manipulation functions
import { PokeState, PokeAction } from '../types';
import {
    GET_POKEMON_LIST_BEGIN,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAIL
} from '../constants';

const defaultState: PokeState = {
    data: [],
    loading: false,
    error: null
};

function pokeReducer(state: PokeState = defaultState, action: PokeAction): PokeState {
    switch (action.type) {
        case GET_POKEMON_LIST_BEGIN:
            state.data = [];
            state.loading = true;
            break;
        case GET_POKEMON_LIST_SUCCESS:
            state.data = action.payload.data;
            state.loading = false;
            break;
        case GET_POKEMON_LIST_FAIL:
            state.data = [];
            state.loading = false;
            state.error = action.payload.error;
            break;
        default:
        state = defaultState;
    }

    return state;
}

export {
    pokeReducer
};