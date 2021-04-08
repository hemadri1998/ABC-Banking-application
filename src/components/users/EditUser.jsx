import react from "react"

import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import { useHistory, useParams, Link } from 'react-router-dom';



const EditUser = (props) => {
  let history = useHistory();
  const { id } = useParams();
  // alert(id);
  const [user, setuser] = useState({
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
    savingaccount: "",
    Balance: ""



  });
  const { firstname, lastname, Address, pincode, phonenumber, email, password, country, state, currentAccount, savingaccount, Balance } = user;
  const onInputChange = e => {
    setuser({ ...user, [e.target.name]: e.target.value })

  };
  useEffect(() => {
    loadUser()
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    await axios.put("http://localhost:3002/users/${id}", user);
    props.history.push("/");

  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3002/users/${id}");
    setuser(result.data);
  };
  const login1 = () => {
    props.history.push('/Dashboard');
  };

  return (

    <div style={{ marginLeft: '25%' }}>

      <Card style={{ width: '40rem', marginTop: '10%', backgroundColor: 'skyblue' }}>
        <div>
          <Link className="btn btn-primary" onClick={login1} style={{ marginLeft: '500px', backgroundColor: 'tomato' }}>
            back to home
            </Link>


          <Form className="Registration">
            <h1>
              <span className="font-weight-bold">Edit User Details</span>
            </h1>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrhV4nu6HWZVeb6dHQMZZdjesEfwAkJety4ijp3RwgxB9O0tqxlvDeGYqQROVgySsCw3Y&usqp=CAU" />

            <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
                <label>firstname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="firstname" name="Balance"
                  value={Balance}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>lastname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="lastname" name="Balance"
                 value={lastname}

                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>

                <Form.Group>
                  <label>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input type="text" placeholder="Address"
                    value={Address}
                    onChange={e => onInputChange(e)} />
                </Form.Group>
                <Form.Group>
                  <label>Pincode:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <input type="text" placeholder="pincode"
                    value={pincode}
                    onChange={e => onInputChange(e)} />
                </Form.Group>
                <Form.Group>
                  <label>Phonenumber:&nbsp;&nbsp;</label>
                  <input type="text" placeholder="phonenumber"
                    value={phonenumber}
                    onChange={e => onInputChange(e)} />
                </Form.Group>
                <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="email"
                  value={email}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="password"
                  value={password}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="country"
                  value={country}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>State:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="state"
                  value={state}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>CurrentAccount:</label>
                <input type="text" placeholder="CurrentAccount" name="currentAccount"
                  value={currentAccount}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>SavingAccount:&nbsp;&nbsp;</label>
                <input type="text" placeholder="savingAccount" name="savingaccount"
                  value={savingaccount}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <Form.Group>
                <label>Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="text" placeholder="balance" name="Balance"
                  value={Balance}
                  onChange={e => onInputChange(e)} />
              </Form.Group>
              <button className="btn btn-warning btn-block">Update User</button>
            </Form>
          </Form>
        </div>
      </Card>
    </div>
  );

};
export default EditUser;