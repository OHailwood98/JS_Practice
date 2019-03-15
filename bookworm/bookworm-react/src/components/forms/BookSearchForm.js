import React from 'react'
import {Form, Dropdown} from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'

class BookSearchForm extends React.Component{
    constructor(){
        super()
        this.state = {
            query:"",
            loading: false,
            options:[{
                key:1,
                value:1,
                text: "First Book"
            },{
                key:2,
                value:2,
                text: "Second Book"
            }],
            books:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    

    onSearchChange(e, data){
        clearTimeout(this.timer);
        this.setState({query:data.searchQuery});
        this.timer = setTimeout(this.fetchOptions, 1000);
    }

    fetchOptions = () =>{
        if(!this.state.query)return;
        this.setState({loading:true});
        axios.get(`/api/books/search?q=${this.state.query}`)
            .then(res => res.data.books)
            .then(books =>{
                const options = [];
                const booksHash = {};
                books.forEach(book => {
                    booksHash[book.goodreadsId] = book;
                    options.push({
                        key:book.goodreadsId,
                        value: book.goodreadsId,
                        //content:<SearchResultForm Book={book} /> ,
                        text:book.title + "\n Written by: " + book.authors
                    })
                });
                this.setState({loading:false, options, books:booksHash })
            })
    }

    onChange(e, data){
        this.setState({query:data.value})
        this.props.onSelectBook(this.state.books[data.value])
    }

    render(){
        return(
            <div>
                <Form>
                    <Dropdown search fluid placeholder="Search for Books by Title" 
                    value={this.state.query} onSearchChange={this.onSearchChange}
                    options={this.state.options} loading={this.state.loading}
                    onChange={this.onChange} />
                </Form>
            </div>  
        )
    }
}

BookSearchForm.propType = {
    onSelectBook: PropTypes.func.isRequired
}

export default BookSearchForm