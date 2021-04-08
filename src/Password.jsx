import React, { useState, Fragment } from 'react';
import { Form } from 'react-bootstrap';

function Password(props) {
  return (
    <Fragment>
      <Form.Group controlId="formBasicPassword">
        <Form.Label style={{ fontSize: '20px' }}>Password:</Form.Label>
        <Form.Control type="password" placeholder=""
          value={props.passwordVal}
          onChange={props.passwordChange}
          block />
      </Form.Group>
    </Fragment>

  )
}
export default Password;