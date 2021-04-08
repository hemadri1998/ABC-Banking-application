import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import axios from 'axios';

const TransactionHistory = (props) => {
    const [user, setUser] = useState({

        Transactiondate: "",
        LastTransactionAmount: "",
        TransactionDate: "",
        TransactionRemarks: "",
        TransactionType: "",
        Transactionamount: "",
        FromAccountNumber: "",
        ToAccountNumber: "",
        Transacitiontimestamp: "",
        TransactionId: "",
        Transactionstatus: ""
});
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3002/users/${id}`);
        setUser(res.data);
    };
    const login1 = () => {
        props.history.push('/account');
    };
    return (
        <div style={{ marginLeft: '25%' }}>
            <Card style={{ width: '40rem', marginTop: '10%', backgroundColor: 'skyblue' }}>
                <div className="container py-4">
                    <div className="container py-4">
                        <Link className="btn btn-primary" onClick={login1} style={{ marginLeft: '500px', backgroundColor: 'tomato' }}>
                            back to home
            </Link>
                        <h1 className="dispaly-4">savingsTransactionHistory:{id}</h1>
                        <hr />
                        <img
                            className="d-block w-100"
                            src="data:image/jpeg;base64,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" />
                        <ul className="list-group w-50">

                            <li className="list-group-item">TransactionDate:{user.TransactionDate}</li>
                            <li className="list-group-item">TransactionRemarks:{user.TransactionRemarks}</li>
                            <li className="list-group-item">TransactionType:{user.TransactionType}</li>
                            <li className="list-group-item">Transactionamount:{user.Transactionamount}</li>
                            <li className="list-group-item">FromAccountNumber:{user.FromAccountNumber}</li>
                            <li className="list-group-item">ToAccountNumber:{user.ToAccountNumber}</li>
                            <li className="list-group-item">Transacitiontimestamp:{user.Transacitiontimestamp}</li>
                            <li className="list-group-item">currentAccount:{user.Transactionstatus}</li>





                        </ul>


                    </div>
                </div>
            </Card>
        </div>
    );

};
export default TransactionHistory;