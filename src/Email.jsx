import React, { useState, Fragment } from 'react';
import { Form } from 'react-bootstrap';

function Email(props) {
    return (
        <Fragment>
            <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ fontSize: '20px' }}>Email:</Form.Label>
                <Form.Control type="email" placeholder="abc@gmail.com"
                    value={props.emailVal}
                    onChange={props.emailValueChange} block />
            </Form.Group>

        </Fragment>

    )
}
export default Email;