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
        this.onSubmit = this.onSubmit.bind(this);
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
            .then(res => console.dir(res))
    }

    onSubmit(){
    }

    render(){
        return(
            <div>
                <Form>
                    <Dropdown search fluid placeholder="Search for Books by Title" 
                    value={this.state.query} onSearchChange={this.onSearchChange}
                    options={this.state.options} loading={this.state.loading} />
                </Form>
            </div>  
        )
    }
}

BookSearchForm.propType = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
}

export default BookSearchForm