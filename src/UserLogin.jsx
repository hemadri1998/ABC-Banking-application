
import React, { useState, Fragment, useEffect } from 'react';
import { Form, Button, Card, Alert, Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ResetLogin from './ResetLogin';
import Email from './Email';
import Password from './Password';


function UserLogin(props) {

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
                    return props.history.push('/account');
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

                            <span className="font-weight-bold">Welcome to UserLogin</span>
                        </h1>
                        <img
                            className="d-block w-100"
                            src="https://www.tjsb.net/internetbanking/view/images/login_07.gif" />

                        <br></br>
                        <Form>
                            <div style={{ marginRight: '200px' }}>

                            </div>
                            <Email emailVal={emailVal}
                                emailValueChange={emailValueChange} />

                            <Password
                                passwordVal={passwordVal}
                                passwordChange={passwordValueChange} />

                            <Button variant="warning" size="lg" onClick={onSubmit} block>Log In</Button>

                        </Form>
                        <br></br>

                    </form>
                </Card>
            </div>
        </div>
    );
}

export default UserLogin;