import React from 'react'
import {Alert} from 'react-bootstrap'

const Mesage = ({variant, children}) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

MessageChannel.defaultProps = {
    variant: 'info',
}

export default Mesage
