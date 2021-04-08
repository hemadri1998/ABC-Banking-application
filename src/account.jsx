import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Account = (props) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
    };


    const login1 = () => {
        props.history.push('/UserLogin');
    };
    const Logout = () => {
        props.history.push('/UserLogin');
    }
    return (

        <div>
              <Button variant="Link" onClick={Logout} style={{ marginLeft: '1100px', backgroundColor: 'tomato' }}>Logout</Button>
            <Link class="btn btn-primary mr-2" onClick={login1} style={{ marginLeft: '1100px', backgroundColor: 'tomato' }}>back to home</Link>
            <br></br>
            <br></br>
            <ListGroup>
                {
                    users.map((user, index) => (
                        <ListGroup.Item>
                            <th scope="row">{index + 1}</th>
                            <td>FirstName:{user.firstname}</td><br></br>
                            <td>LastName:{user.lastname}</td><br></br>
                            <td>CurrentAccount:{user.currentAccount}</td><br></br>
                            <td>SavingAccount:{user.savingaccount}</td><br></br>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/736x/ba/2c/b4/ba2cb445ff34cc6d28cc0a1abfb8dedf.jpg" />
                            <td>
                                <Link class="btn btn-info mr-2" to={`/users/${user.id}`}>current</Link>

                                <Link class="btn btn-info mr-2" to={`/Savings/${user.id}`}>Savings</Link>

                                <Link class="btn btn-info mr-2" to={`/FundTransfer/${user.id}`}>FundTransfer</Link>

                                <Link class="btn btn-info mr-2" to={`/CTransactionHistory/${user.id}`}>CurrentTransactionHistory</Link>

                                <Link class="btn btn-info mr-2" to={`/TransactionHistory/${user.id}`}>savingsTransactionHistory</Link>
                                <br></br>
                                <br></br>



                            </td>
                        </ListGroup.Item>
                    ))
                }

            </ListGroup>

            <button className="btn btn-ouline-primary">AddUser</button>



        </div>


    );
}
//   }
export default Account;