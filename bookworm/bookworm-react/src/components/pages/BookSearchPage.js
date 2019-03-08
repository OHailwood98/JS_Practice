import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {allBookSelector} from "../../reducers/books"
import { Segment } from "semantic-ui-react";
import BookSearchForm from "../forms/BookSearchForm"

class BookSearchPage extends React.Component {

    state = {
        book:null
    }

  render() 
  {
    return (
        <div>
          	<Segment>
                <h2>Book Search</h2>
                <BookSearchForm />
          	</Segment>
        </div>
    );
  }

}

BookSearchPage.propTypes = {
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