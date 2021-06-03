import React, { useState } from 'react';
import { Input, Col, Row, Container } from 'reactstrap';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./Styles.css";

const PaymentForms = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);





    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });


        if (payload.error) {

            //console.log("[Error]", payload.error);
            setErrorMessage(payload.error.message);
            //console.log(errorMessage);
            setPaymentMethod(null);
        } else {
            //console.log('[paymentMethod]', payload.paymentMethod);
            setPaymentMethod("Payment has been Successfully Sent!");
            setErrorMessage(null)
        }
    };
    return (

        <Container>
            <Col md={4}>
                <label htmlFor="cardName">Card Holder's Name</label>
                <Input type="text" name="name" id="nameText" placeholder="Card Holder's Name" />
            </Col>
            <form onSubmit={handleSubmit}>
                <Col md={4}>

                    <label htmlFor="cardNumber">Card Number</label>
                    <CardNumberElement
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            setErrorMessage(null)
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}


                    />
                </Col>

                <Row >

                    <Col md={2}>
                        <label htmlFor="cardExpiry">Card Expiry</label>
                        <CardExpiryElement
                            id="expiryDate"
                            onReady={() => {
                                console.log("CardExpiryElement [ready]");
                            }}
                            onChange={event => {
                                setErrorMessage(null)
                                console.log("CardExpiryElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardExpiryElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardExpiryElement [focus]");
                            }}

                        />
                    </Col>
                    <Col md={2}>
                        <label htmlFor="cardCVC">Card CVC</label>
                        <CardCvcElement
                            id="expiryDate"
                            onReady={() => {
                                console.log("CardCVCElement [ready]");
                            }}
                            onChange={event => {
                                setErrorMessage(null)
                                console.log("CardCVCElement [change]", event);
                            }}
                            onBlur={() => {
                                console.log("CardCVCElement [blur]");
                            }}
                            onFocus={() => {
                                console.log("CardCVCElement [focus]");
                            }}

                        />
                    </Col>

                </Row>
                <div>
                    <b style={{ color: 'red' }}>{errorMessage}</b>
                    <b style={{ color: 'green' }}>{paymentMethod}</b>
                </div>


                <button type="submit" disabled={!stripe}>
                    Pay
                    </button>
            </form>
        </Container>

    );

};

export default PaymentForms;