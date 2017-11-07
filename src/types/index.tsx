// Types, will contains all types
import { Action } from 'redux';

export interface StoreState {
    pokemons: Pokemons;
    loading: boolean;
    error: any;
};
export interface Pokemons {
    results: Array<any>;
}
export interface PokeState extends StoreState{
    pokemons: Pokemons;
};

export type Limit = 10 | 20 | 50;

export type PokeTypes = 
   'GET_POKEMON_LIST'
 | 'GET_POKEMON_LIST_BEGIN'
 | 'GET_POKEMON_LIST_SUCCESS'
 | 'GET_POKEMON_LIST_FAIL'
 | 'GET_POKEMON_IMAGE'
 | 'GET_POKEMON_IMAGE_BEGIN'
 | 'GET_POKEMON_IMAGE_SUCCESS'
 | 'GET_POKEMON_IMAGE_FAIL';

 export interface PokeAction extends Action {
    type: PokeTypes;
    payload?: any;
}
