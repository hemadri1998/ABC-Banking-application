import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
const AccountDetails = (props) => {

    const [user, setUser] = useState(
);
    const [showButton, setShowButton] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users`);
        setUser(res.data);
    }
    const currentAccountButton = () => {
        setShowButton(true);
    }
    const savingAccountButton = () => {
        setShowButton(false);

    }

    return (
        <div>
            <div style={{ marginRight: '160px' }}>
                <Button variant="white" onClick={currentAccountButton}>CurrentAccountDetails</Button>
                <Button variant="white" onClick={savingAccountButton}>savingAccountDetails</Button><hr />
            </div>
            {
                showButton === true && (
                    <div>
                        <ListGroup>
                            <ListGroup.Item>FirstName:{user.firstname}</ListGroup.Item>
                            <ListGroup.Item>LastName:{user.lastname}</ListGroup.Item>
                            <ListGroup.Item>currentAccount:{user.currentAccount}</ListGroup.Item>
                       
                            <ListGroup.Item>Balance:{user.Balance}</ListGroup.Item>
                            <ListGroup.Item>LastTransctionDate:{user.LastTransactiondate}</ListGroup.Item>
                            <ListGroup.Item>LastTransctionDate:{user.LastTransactionAmount}</ListGroup.Item>

                            
                            <br></br>
                        </ListGroup>
                        <br></br>

                    </div>
                )
            } {
                (showButton === false &&
                    <div>
                        <ListGroup>
                            <ListGroup.Item>FirstName:{user.firstname}</ListGroup.Item>
                            <ListGroup.Item>LastName:{user.lastname}</ListGroup.Item>
                            <ListGroup.Item>savingaccount:{user.savingaccount}</ListGroup.Item>
                            <ListGroup.Item>Balance:{user.Balance}</ListGroup.Item>
                            <ListGroup.Item>LastTransctionDate:{user.LastTransactiondate}</ListGroup.Item>
                            <ListGroup.Item>LastTransctionDate:{user.LastTransactionAmount}</ListGroup.Item>
                            <br />
                        </ListGroup>


                    </div>)}
        </div> 
    
   
    )
}


export default AccountDetails;
