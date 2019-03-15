import {createSelector} from 'reselect'
import {BOOKS_FETCHED} from '../types'


export default function user(state = {}, action = {}){
    switch(action.type){
        case BOOKS_FETCHED:
            return{...state, ...action.data.entities.books}
        default: return state;
    }
}

export const bookSelector = state => state.books;

export const allBookSelector = createSelector(bookSelector, booksHash => Object.values(booksHash))
