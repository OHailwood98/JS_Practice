import React from 'react'
import {Image, Segment, Grid, Form, Button} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class BookDisplayForm extends React.Component{

    state = {
        data:{
            goodreadsId:this.props.Book.goodreadsId,
            title: this.props.Book.title,
            authors: this.props.Book.authors,
            cover: this.props.Book.covers[0],
            pages: this.props.Book.pages
        },
        covers: this.props.Book.covers,
        index:0,
        loading: false,
        errors: {}
    }
    imageClick = this.imageClick.bind(this)
    Submit = this.Submit.bind(this)

    componentWillReceiveProps(props){
      this.setState({
        data: {
          goodreadsId: props.Book.goodreadsId,
          title: props.Book.title,
          authors: props.Book.authors,
          cover: props.Book.covers[0],
          pages: props.Book.pages
      },
      covers: props.Book.covers
      })
    }

    onChange = e => this.setState({
      ...this.state,
      data:{...this.state.data, [e.target.name]: e.target.value}
    });

    onChangeNumber = e => this.setState({
      ...this.state,
      data:{...this.state.data, [e.target.name]: parseInt(e.target.value)}
    });

    Submit(){
        var book = this.state.data
        this.props.saveBook(book)
    }

    imageClick(){
        var picNos = this.state.covers.length;
        var Index = this.state.index + 1
        if(Index>=picNos){
            Index -= picNos;
        }
        this.setState({index:Index, data:{...this.state.data, cover:this.state.covers[Index] }})
    }

    render(){
        var {data, errors, loading, index, covers} = this.state
        var coverLen = covers.length;
      return(
            <div>
                <Segment>
                    <Form loading={loading || this.props.loading}>
                        <Grid columns={2} fluid="true" stackable>
                            <Grid.Row>
                                <Grid.Column>
                                    <Form.Field error={!!errors.title}>
                                        <label htmlFor="title">Title</label>
                                        <input type="text" id="title" name="title" placeholder="title" value={data.title} onChange={this.onChange} />
                                    </Form.Field>
                                    <br/>
                                    <Form.Field error={!!errors.authors}>
                                        <label htmlFor="authors">Written by</label>
                                        <input type="text" id="authors" name="authors" placeholder="authors" value={data.authors} onChange={this.onChange} />
                                    </Form.Field>
                                    <br/>
                                    <Form.Field error={!!errors.pages}>
                                        <label htmlFor="pages">Number of Pages</label>
                                        <input type="number" id="pages" name="pages" placeholder="pages" value={data.pages} onChange={this.onChangeNumber} />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column>
                                    <Form.Field>
                                        <label centered="true">Cover Image:
                                            <Image size="medium" centered src={data.cover} alt="No Image Supplied :(" onClick={this.imageClick}/>
                                        </label>
                                        <label>Picure {index+1}/{coverLen}</label>
                                    </Form.Field>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                              <Button primary onClick={this.Submit}>Save</Button>
                            </Grid.Row>
                        </Grid>
                    </Form>
                </Segment>
            </div>
        )  
    } 
}

//<a href="#" roll="button" tabIndex={0} onClick={this.changeCover}>Next Image</a>    

BookDisplayForm.propTypes = {
    Book:PropTypes.shape({
    goodreadsId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    covers: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    pages:PropTypes.number.isRequired
    }).isRequired,
    saveBook: PropTypes.func.isRequired
  };

export default BookDisplayForm;