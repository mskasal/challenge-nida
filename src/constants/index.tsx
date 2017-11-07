// Constants, will contains all constants including urls, action constants etc..
import { PokeTypes } from '../types';

export const GET_POKEMON_LIST: PokeTypes = 'GET_POKEMON_LIST';

export const GET_POKEMON_LIST_BEGIN: PokeTypes = 'GET_POKEMON_LIST_BEGIN';

export const GET_POKEMON_LIST_SUCCESS: PokeTypes = 'GET_POKEMON_LIST_SUCCESS';

export const GET_POKEMON_LIST_FAIL: PokeTypes = 'GET_POKEMON_LIST_FAIL';

export const GET_POKEMON_IMAGE: PokeTypes = 'GET_POKEMON_IMAGE';

export const GET_POKEMON_IMAGE_BEGIN: PokeTypes = 'GET_POKEMON_IMAGE_BEGIN';

export const GET_POKEMON_IMAGE_SUCCESS: PokeTypes = 'GET_POKEMON_IMAGE_SUCCESS';

export const GET_POKEMON_IMAGE_FAIL: PokeTypes = 'GET_POKEMON_LIST_FAIL';

export const baseURL: string = 'https://pokeapi.co/api/v2/';

export const imageUrl: string = 'https://pokeapi.co/api/v1/sprite/';

export const pokeImageBase: string = 'https://pokeapi.co/'
