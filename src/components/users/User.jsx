import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import axios from 'axios';

const User = (props) => {
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        Address: "",
        pincode: "",
        phonenumber: "",
        email: "",
        password: "",
        country: "",
        state: "",
        currentAccount: "",

        Balance: "",



    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    };
    const login3 = () => {
        props.history.push('/account');
    };
    return (
        <div style={{ marginLeft: '25%' }}>

            <Card style={{ width: '40rem', marginTop: '10%', backgroundColor: 'skyblue' }}>
                <div className="container py-4">
                    <Link class="btn btn-primary mr-2" onClick={login3} style={{ marginLeft: '500px', backgroundColor: 'tomato' }}>back to home</Link>
                    <h1 className="dispaly-4">Current :{id}</h1>
                    <hr />
                    <img
                        className="d-block w-100"
                        src="https://image.freepik.com/free-vector/mobile-bank-users-transferring-money-currency-conversion-tiny-people-online-payment-cartoon-illustration_74855-14454.jpg" />
                    <ul className="list-group w-50">
                        <li className="list-group-item">Firstname:{user.firstname}</li>
                        <li className="list-group-item">LatName:{user.lastname}</li>
                        <li className="list-group-item">Address:{user.Address}</li>
                        <li className="list-group-item">Pincode:{user.pincode}</li>
                        <li className="list-group-item">phonenumber:{user.phonenumber}</li>
                        <li className="list-group-item">email:{user.email}</li>
                        <li className="list-group-item">password:{user.password}</li>
                        <li className="list-group-item">country:{user.country}</li>
                        <li className="list-group-item">state:{user.state}</li>
                        <li className="list-group-item">currentAccount:{user.currentAccount}</li>

                        <li className="list-group-item">Balance:{user.Balance}</li>
                        <li className="list-group-item">Balance:{user.LastTransactiondate}</li>
                        <li className="list-group-item">Balance:{user.LastTransactionAmount}</li>



                    </ul>


                </div>
            </Card>
        </div>
    );

};
export default User;