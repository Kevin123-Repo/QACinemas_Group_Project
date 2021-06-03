import React from 'react';
import { Input, Col, Row, Container } from 'reactstrap';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import "./Styles.css";

const PaymentForms = () => {
    const stripe = useStripe();
    const elements = useElements();




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });
        console.log("[PaymentMethod]", payload)
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

                        />
                    </Col>
                    <Col md={2}>
                        <label htmlFor="cardCVC">Card CVC</label>
                        <CardCvcElement
                            id="expiryDate"

                        />
                    </Col>

                </Row>

                <button type="submit" disabled={!stripe}>
                    Pay
                    </button>
            </form>
        </Container>

    );

};

export default PaymentForms;