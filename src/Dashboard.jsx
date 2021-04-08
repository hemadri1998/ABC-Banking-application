import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { Button, Table } from 'react-bootstrap';


const Dashboard = (props) => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3002/users");
        setUser(result.data.reverse());
        console.log('users');
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }
    const Logout = () => {
        props.history.push('/AdminLogin');
    }

    const AddUser = () => {
        props.history.push("/add");
    }


    return (


        <div>
            <Table class="table border shadow">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">fistname</th>
                        <th scope="col">lastname</th>
                        <th scope="col">Address</th>
                        <th scope="col">pincode</th>
                        <th scope="col">phonenumber</th>
                        <th scope="col">email</th>

                        <th scope="col">password</th>
                        <th scope="col">country</th>
                        <th scope="col">state</th>
                        <th>Action</th>
                        <Button variant="Link" onClick={Logout} className="btn btn-warning btn-block">Logout</Button>
                        <Button variant="Link" onClick={AddUser} className="btn btn-info btn-block">AddUser</Button>

                    </tr>

                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.Address}</td>
                                <td>{user.pincode}</td>
                                <td>{user.phonenumber}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.country}</td>
                                <td>{user.state}</td>
                                <td>
                                    <Link class="btn btn-success mr-2" to={`/users/${user.id}`}>View</Link>
                                    <Link class="btn btn-outline-warning mr-2" to={`/edit/${user.id}`}>Edit</Link>
                                    <Link class="btn btn-danger mr-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>





        </div>


    );
}
//   }
export default Dashboard;