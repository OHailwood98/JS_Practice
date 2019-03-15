import api from "../api"
import {BOOKS_FETCHED} from '../types'
import {normalize} from 'normalizr'
import {bookSchema} from '../schemas'

const booksFetched = (data) =>({
    type: BOOKS_FETCHED,
    data
})

export const getBooks = () => (dispatch) =>api.books.getAll().then(books => dispatch(booksFetched(normalize(books, [bookSchema]))))