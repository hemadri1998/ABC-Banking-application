import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Card } from 'react-bootstrap';
import axios from 'axios';

const FundTransfer = (props) => {
    const [user, setUser] = useState({


        NationalElectronicFund: "",
        RealTimeGrossSettlement: "",
        ImmediatePaymentService: "",
        UnifiedPaymentsInterface: "",
        Cheque: ""





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
                    <Link class="btn btn-primary mr-2" onClick={login1} style={{ marginLeft: '500px', backgroundColor: 'tomato' }}>back to home</Link>
                    <h1 className="dispaly-4">FundTransfer:{id}</h1>
                    <hr />
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/max/3200/1*l4FAfcRJ58nmIDShIinRzQ.jpeg" />
                    <ul className="list-group w-50">

                        <li className="list-group-item">NationalElectronicFund:{user.NationalElectronicFund}</li>
                        <li className="list-group-item">RealTimeGrossSettlement:{user.RealTimeGrossSettlement}</li>
                        <li className="list-group-item">ImmediatePaymentService:{user.ImmediatePaymentService}</li>
                        <li className="list-group-item">UnifiedPaymentsInterface:{user.UnifiedPaymentsInterface}</li>
                        <li className="list-group-item">Cheque:{user.Cheque}</li>


                    </ul>


                </div>
            </Card>
        </div>
    );

};
export default FundTransfer;