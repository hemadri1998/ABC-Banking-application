import axios from "axios";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import { useHistory,Link } from 'react-router-dom';



const AddUser = (props) => {
  let history = useHistory();
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
    savingaccount: "",
    Balance: "",



  });
  const { firstname, lastname, Address, pincode, phonenumber, email, password, country, state, currentAccount, savingaccount, Balance } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  // const onInputChange =(e)=>{
  //     setUser({...user,[e.target.firstname]:e.target.value});


  // };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    props.history.push("/Dashboard");
    console.log('hii');

  };
  const login1=()=>{
    props.history.push('/Dashboard');
  };
  return (
    <div style={{ marginLeft: '25%' }}>
      
      <br></br>
      <Card style={{ width: '40rem', marginTop: '0%', backgroundColor: 'skyblue' }}>

        <Form className="AddUsers" >
          <h1>
            <span className="font-weight-bold">Add User Details</span>
          </h1>
          
          <Link className="btn btn-primary" onClick={login1} style={{marginLeft:'500px',backgroundColor:'tomato'}}>
                back to home
            </Link>
          <img
            className="d-block w-100"
            src="https://static.toiimg.com/thumb/resizemode-75,msid-69731477,width-800,height-450/69731477.jpg" />


          <Form.Group>
            <label>Firstname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="Firstname" name="firstname" value={firstname}

              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>lastname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="lastname" name="lastname" value={lastname}

              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>

            <Form.Group>
              <label>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" placeholder="Address" name="Address"
                value={Address}
                onChange={e => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
              <label>Pincode:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" placeholder="pincode" name="pincode"
                value={pincode}
                onChange={e => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
              <label>Phonenumber:</label>
              <input type="text" placeholder="phonenumber" name="phonenumber"
                value={phonenumber}
                onChange={e => onInputChange(e)} />
            </Form.Group>
            <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="email" name="email"
              value={email}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="password" name="password"
              value={password}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="country" name="country"
              value={country}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>State:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="state" name="state"
              value={state}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>CurrentAccount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="CurrentAccount" name="currentAccount"
              value={currentAccount}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>SavingAccount:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="savingAccount" name="savingaccount"
              value={savingaccount}
              onChange={e => onInputChange(e)} />
          </Form.Group>
          <Form.Group>
            <label>Balance:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" placeholder="balance" name="Balance"
              value={Balance}
              onChange={e => onInputChange(e)} />
          </Form.Group>

          <Button onClick={onSubmit} className="btn btn-success btn-block">Add User</Button>

        </Form>

      </Card>
    </div>

  );

}
export default AddUser;