import {v1 as uuid} from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        { id:uuid(), name:'state eggs'},
        { id:uuid(), name:'state milk'},
        { id:uuid(), name:'state steak'},
        { id:uuid(), name:'state somethineg water'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
              ...state,
              items: state.items.filter(item => item.id !== action.payload) 
            };
        case ADD_ITEM:
            return{
               ...state,
               items: [...state.items, action.payload ] 
            }
        default:
            return state;
    }
}