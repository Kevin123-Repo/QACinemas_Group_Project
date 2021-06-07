import { useState } from 'react';
import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement} from "@stripe/react-stripe-js";
import { Spinner, Button } from 'reactstrap';
import axios from "axios";
import CardSection from "./CardSection";

const CheckoutForm = ({bookingInfo}) => {

    const stripe = useStripe();
    const elements = useElements();
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);

    const PRICE = +((bookingInfo.adults * 7.99) + (bookingInfo.child * 5.99) + (bookingInfo.concession * 3.99)).toFixed(2);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
            setSuccessMessage(null);
            setErrorMessage(result.error.message);
        } else {
            setPaymentProcessing(true);
            axios.post("http://localhost:8080/bookings/payment", {price: PRICE, token: result.token, booking: bookingInfo})
                .then((res) => {
                    setPaymentProcessing(false);
                    setSuccessMessage("Payment Successful");
                }).catch((err) => {
                    console.error(err.message);
                    setErrorMessage(err.message);
                });
        }
    };

    return (
        <>
            <div className="payment-form">
                <form onSubmit={handleSubmit}>
                    <CardSection name={bookingInfo.name}/>
                    <div className="under-form">
                        <Button disabled={!stripe} color="primary" type="submit">Send</Button>
                        <div className="price-div">{`Total Cost: ${PRICE}`}</div>
                    </div>
                </form>
                    {
                        (paymentProcessing)? <Spinner className="card-loading" color="success" children=""/> : ""
                    }
            </div>
            <div>
                <b className="card-error"> {errorMessage} </b>
            </div>
            <div>
                <b className="card-success"> {successMessage} </b>
            </div>
        </>
    );

}
export default CheckoutForm;
