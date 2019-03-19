import React from 'react'
import PropTypes from 'prop-types'

const InlineError = ({message}) => <span style={{color:"#ffb8b8", fontSize:"14pt"}}>{message}</span>

InlineError.propTypes = {
    message: PropTypes.string.isRequired
}

export default InlineError