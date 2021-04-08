import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetLogin from './ResetLogin';
import Email from './Email';
import Password from './Password';


function AdminLogin(props) {

    const [showAlert, setShowAlert] = useState(null);
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [admin, setAdmin] = useState([]);

    const emailValueChange = (e) => {
        setEmailVal(e.target.value);
    }

    const passwordValueChange = (e) => {
        setPasswordVal(e.target.value);
    }
    useEffect(() => {
        loadAdmin();
    }, []);

    const loadAdmin = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setAdmin(result.data.reverse());
    }
    const login1 = () => {
        props.history.push('/Front');
    };

    const onSubmit = () => {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        const isEmailValid = emailRegex.test(emailVal);
        const isPasswordValid = passwordRegex.test(passwordVal);

        if (isEmailValid && isPasswordValid) {
            for (let i = 0; i < admin.length; i++) {
                debugger
                if (emailVal == admin[i].email && passwordVal == admin[i].password) {
                    return props.history.push('/Dashboard');


                } else {
                    if (i == admin.length - 1) {
                        alert("Enter correct Email and Password");

                    }
                }
            }
        }
        else {
            alert("Entered details are Invalid");
        }
    }


    return (
        <div className="bgD">
            <Link class="btn btn-primary mr-2" onClick={login1} style={{ marginLeft: '1100px', backgroundColor: 'tomato' }}>back to home</Link>
            <div style={{ marginLeft: '25%' }}>
                <br></br>
                <Card style={{ width: '40rem', marginTop: '0%', backgroundColor: 'skyblue' }}>
                    <form className="login-form">
                        <h1>

                            <span className="font-weight-bold">Welcome to AdminLogin</span>
                        </h1>
                        <img
                            className="d-block w-100"
                            src="data:image/jpeg;base64,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" />
                        <br></br>
                        <Form>
                            <div style={{ marginRight: '200px' }}>

                            </div>
                            <Email emailVal={emailVal}
                                emailValueChange={emailValueChange} />

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />
                            <br></br>

                            <Button variant="warning" size="lg" onClick={onSubmit} block>Log In</Button>
                            {
                                showAlert === true && (
                                    <Alert variant="success">Success</Alert>
                                )}{(showAlert === false &&
                                    <Alert variant="warning">Failure</Alert>
                                )}
                            <br />
                        </Form>
                        <br></br>
                    </form>
                </Card>
            </div>
        </div>
    );
}

export default AdminLogin;