import React from "react";
import BookDisplayItem from './BookDisplayItem'
import styled from 'styled-components'

class SavedBookForm extends React.Component{
    constructor(Books){
        super();
        this.state = {
            books:Books.books
        }
    }

   
    render(){
         const BookContainter = styled.div`
            width: 100%;
            display: flex;
            flex-basis: 100%;
            margin: auto;
            flex-flow: row wrap;
            align-items: flex-start;
            justify-content: space-between;
            padding: 10px;`

        var len = this.state.books.length
        var books = this.state.books.map(newBook => <BookDisplayItem book={newBook}/>)
        return(
            <div>
                <h1>Here are your books!</h1>
                <h2> You have {len} books</h2>
                <BookContainter >
                    {books}
                </BookContainter>
                
            </div>
    )}
}

export default SavedBookForm;