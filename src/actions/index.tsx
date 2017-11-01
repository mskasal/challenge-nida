// Actions, will responsible of calling services and all user actions
import axios from 'axios';
import { Dispatch, Action } from 'redux';
// import { ThunkAction } from 'redux-thunk';
import { Limit, StoreState, PokeAction } from '../types';
import {
    GET_POKEMON_LIST_BEGIN,
    GET_POKEMON_LIST_SUCCESS,
    GET_POKEMON_LIST_FAIL,
    baseURL
} from '../constants';

// const getPokeListAsync = function(limit: Limit): ThunkAction<Promise<any>, StoreState, any> {
//     const query: string = `limit=${limit}`;

//     return (dispatch: Dispatch<Action>) => {
//         dispatch(getPokeListBegin());

    //     return axios(`${baseURL}/pokemons?${query}`, {
    //         method: 'GET',
    //         headers: new Headers({
    //           'Content-Type': 'application/json'
    //         })
    //       })
    //         .then((response) => {
    //           dispatch(getPokeListSuccess(response.data));
    //         })
    //         .catch((error) => {
    //           dispatch(getPokeListFail(error));
    //         });
    // };
// };


const getPokeListAsync = (limit: Limit) => 
    (dispatch: Dispatch<PokeAction>, getState: () => StoreState): Promise<any> => {
        const query: string = `limit=${limit}`;

        dispatch(getPokeListBegin());

        return axios(`${baseURL}/pokemons?${query}`, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
            .then((response) => {
              dispatch(getPokeListSuccess(response.data));
            })
            .catch((error) => {
              dispatch(getPokeListFail(error));
            });
    }

const getPokeListBegin = (): Action => ({
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

export {
    getPokeListAsync
};
