import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmail";
import {allBookSelector} from "../../reducers/books"
import NewBookCtA from "../CtA/NewBookCtA.js"
import {getBooks} from '../../actions/books'
import SavedBookForm from "../forms/SavedBookForm"


class DashboardPage extends React.Component {
  render() 
  {
    const { isConfirmed, books} = this.props;
    return (
      <div>
        <div>
          {!isConfirmed && <ConfirmEmailMessage />}
        </div>

        {books.length===0 ? <NewBookCtA /> : <SavedBookForm books={books}/>}
      </div>
    );
  }

  componentDidMount = () => this.onInit(this.props);

  onInit = (props) => props.getBooks();

}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books:PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  getBooks: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBookSelector(state)
  };
}

export default connect(mapStateToProps, {getBooks})(DashboardPage);