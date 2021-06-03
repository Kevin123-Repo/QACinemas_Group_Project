import PaymentForms from "./PaymentForms"
import { Container } from 'reactstrap'

import { loadStripe } from '@stripe/stripe-js';
import {
    Elements
} from '@stripe/react-stripe-js';


const Payments = () => {
    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

    return (
        <>
            <h1> <center>Payments</center> </h1>
            <Container>
                <Elements stripe={stripePromise}>
                    <PaymentForms />
                </Elements>
            </Container>


        </>
    )
}
export default Payments;