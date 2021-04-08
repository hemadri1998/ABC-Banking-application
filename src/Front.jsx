import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";



//  const Dashboard=(props)=> {
//      const Signin=()=>{
//          props.history.push('/Register')
//      }
const Front = (props) => {
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
    const login2 = () => {
        props.history.push('/AdminLogin');
    };
    return (
        <div className="bg">




            <div style={{ marginLeft: '25%' }}>
                <Card style={{ width: '40rem', marginTop: '0%', backgroundColor: "skyblue", }}>

                    <div>

                        <h1>ABC Bank Application</h1>
                        <img
                            className="d-block w-100"
                            src="https://www.info.fastread.in/wp-content/uploads/2019/09/Essay-on-bank.jpg" />
                        <br></br>
                        <br></br>
                        <Link class="btn btn-success mr-2" onClick={login1}>UserLogin</Link>
                        <br></br>
                        <br></br>
                        <Link class="btn btn-success mr-2" onClick={login2}>AdminLogin</Link>
                        <br></br>
                        <br></br>
                        <br></br>
                    




                    </div>

                </Card>
            </div>
        </div>


    );
}
//   }
export default Front;