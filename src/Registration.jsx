import React from 'react'
import {Button,Form,FormGroup,Label,Input,Card} from 'react-bootstrap';
    const Registration=(props)=> {
        const Sign=()=>{
            props.history.push('/login');
        }
        const login1=()=>{
            props.history.push('/login');
          }
          const login2=()=>{
            props.history.push('/Dashboard');
          }
    return(
    
        <form className="Registration">
      <h1>
        <span className="font-weight-bold">welcome to Registration page</span>
      </h1>
     
      <Form>
        <label>Firstname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="Firstname" placeholder="Firstname"/>
      </Form>
      <Form>
        <label>lastname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="lastname" placeholder="lastname"/>
      </Form>
      <Form>
       
      <Form>
        <label>Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="Address" placeholder="Address"/>
      </Form>
      <Form>
        <label>Pincode:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="Pincode" placeholder="pincode"/>
      </Form>
      <Form>
        <label>Phonenumber:</label>
        <input type="phonenumber" placeholder="phonenumber"/>
      </Form>
      <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="email" placeholder="email"/>
      </Form>
      <Form>
        <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="password" placeholder="password"/>
      </Form>
      <Form>
        <label>Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="country" placeholder="country"/>
      </Form>
      <Form>
        <label>State:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="state" placeholder="state"/>
      </Form>

      
      <Button  onClick={login2} className="btn-lg btn-dark btn-block">Register</Button>
    </form>
       

    )

}
export default Registration;
    