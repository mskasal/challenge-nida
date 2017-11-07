// Actions, will responsible of calling services and all user actions
import axios from 'axios';

import { Limit, PokeAction } from '../types';
import {
    GET_POKEMON_LIST_BEGIN,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAIL,
    GET_POKEMON_IMAGE_BEGIN,
    GET_POKEMON_IMAGE_SUCCESS,
    GET_POKEMON_IMAGE_FAIL,
    baseURL,
    imageUrl
} from '../constants';
import { store } from '../';

// GET POKEMON LIST
const getPokeListAsync = (limit: Limit) => {
    const query: string = `limit=${limit}`;

    store.dispatch(getPokeListBegin());
    axios(`${baseURL}pokemon?${query}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        })
        .then((response) => {
            store.dispatch(getPokeListSuccess(response.data));
        })
        .catch((error) => {
            store.dispatch(getPokeListFail(error));
        });
    }

const getPokeListBegin = (): PokeAction => ({
    type: GET_POKEMON_LIST_BEGIN
});

const getPokeListSuccess = (data: any): PokeAction => ({
    type: GET_POKEMON_LIST_SUCCESS,
    payload: data
});

const getPokeListFail = (error: any): PokeAction => ({
    type: GET_POKEMON_LIST_FAIL,
    payload: error
});

// GET IMAGE OF POKEMON
const getPokeImageAsync = (index: number) => {
    const image: string = `${index}`;

    store.dispatch(getPokeImageBegin());
    axios(`${imageUrl}${image}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        })
        .then((response) => {
            store.dispatch(getPokeImageSuccess(response.data));
        })
        .catch((error) => {
            store.dispatch(getPokeImageFail(error));
        });
    }

const getPokeImageBegin = (): PokeAction => ({
    type: GET_POKEMON_IMAGE_BEGIN
});

const getPokeImageSuccess = (data: any): PokeAction => ({
    type: GET_POKEMON_IMAGE_SUCCESS,
    payload: data
});

const getPokeImageFail = (error: any): PokeAction => ({
    type: GET_POKEMON_IMAGE_FAIL,
    payload: error
});

export {
    getPokeListAsync,
    getPokeImageAsync
};
