import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {confirm} from '../../actions/auth'
import {Message, Icon} from 'semantic-ui-react'

class ConfirmPage extends React.Component{
    state = {
        eToken: this.props.match.params.token,
        loading: true,
        confirmed: false,
        error: {}
    }
    componentDidMount(){
        this.props.confirm(this.state.eToken)
            .then(()=>{this.setState({loading:false, confirmed:true})
                //console.log(user)
            })
            .catch(err => {
                console.dir(err)
                return (this.setState({error:err.response.data.errors, loading:false}));
            })
    }

    render(){
        var {loading, confirmed, error} = this.state;
        //console.dir(loading)
        return(
            <div>
                <h1>Thank You!</h1>
                {loading && (<Message icon>
                    <Icon name="circle notched" loading/>
                    <Message.Header> We are validating your email</Message.Header>
                </Message>)}

                {!loading && confirmed && (<div><Message success icon>
                    <Icon name="checkmark" />
                    <Message.Header>Email Valid!</Message.Header>
                </Message>
                <button onClick={() => this.props.history.push("/dashboard")}>Go to Dashboard</button>
                </div>)}

                {error.global && (
                    <Message negative icon>
                        <Icon name="exclamation triangle" />
                        <Message.Header>Something Failed! :(   {error.global}</Message.Header>
                    </Message>
                )}
            </div>
        );
    }
}

ConfirmPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired,
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params:PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}

export default connect(null, {confirm})(ConfirmPage)