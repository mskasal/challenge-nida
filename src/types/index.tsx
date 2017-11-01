// Types, will contains all types
import { Action } from 'redux';
export interface StoreState {
    data: any;
    loading: boolean;
    error: any;
};

export interface PokeState extends StoreState{
    data: Array<any> | Object;
};

export type Limit = 10 | 20 | 50;

export type PokeTypes = 
   'GET_POKEMON_LIST'
 | 'GET_POKEMON_LIST_BEGIN'
 | 'GET_POKEMON_LIST_SUCCESS'
 | 'GET_POKEMON_LIST_FAIL';

 export interface PokeAction extends Action {
    type: PokeTypes;
    payload?: any;
}