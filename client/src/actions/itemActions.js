import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from './types';

// this is where the call to the app back-end server api! 
export const getItems = () => {
    return {
        type: GET_ITEMS
    };
};

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    };
};

export const addItem = item => {
    return {
        type: ADD_ITEM,
        payload: item
    };
};