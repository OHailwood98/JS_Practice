import {createSelector} from 'reselect'

export default function user(state = {}, action = {}){
    switch(action.type){
        default: return state;
    }
}

export const bookSelector = state => state.books;

export const allBookSelector = createSelector(bookSelector, booksHash => Object.values(booksHash))
