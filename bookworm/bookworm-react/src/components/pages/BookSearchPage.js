import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {allBookSelector} from "../../reducers/books"
import { Segment } from "semantic-ui-react";
import BookSearchForm from "../forms/BookSearchForm"
import BookDisplayForm from "../forms/BookDisplayForm"
import axios from 'axios'

class BookSearchPage extends React.Component {

    state = {
        book:null,
        loading: false
    }

    saveBook = this.saveBook.bind(this)

  render() 
  {
    return (
        <div>
          	<Segment>
                <h2>Book Search</h2>
                <BookSearchForm onSelectBook={this.onSelectBook}/>
              </Segment>

              {(!!this.state.book) && <BookDisplayForm saveBook={this.saveBook} loading={this.state.loading} Book={this.state.book}/>}
          	  
        </div>
    );
  }

  onSelectBook = book =>{
    this.setState({book, loading:true});
    axios.get(`/api/books/fetchData?goodreadsId=${book.goodreadsId}`)
      .then(res => res.data.pages)
      .then(pages => this.setState({book: {...book, pages}, loading:false}));
  };

  saveBook(book){
    axios.post("/api/books/", {book}).then(this.props.history.push("/dashboard"))
  }

}

BookSearchPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  books:PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    books: allBookSelector(state)
  };
}

export default connect(mapStateToProps)(BookSearchPage);