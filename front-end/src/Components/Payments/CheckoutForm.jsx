import { useState } from 'react';
import { CardElement, useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement} from "@stripe/react-stripe-js";
import { Spinner } from 'reactstrap';
import axios from "axios";
import CardSection from "./CardSection";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [name, changeName] = useState("");

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
            console.log(result.token);
            axios.post("http://localhost:8080/payment", result.token)
                .then((res) => {
                    setPaymentProcessing(false);
                    setSuccessMessage("Payment Successful");
                    console.log(res);
                }).catch((err) => {
                    console.error(err.message);
                });
        }
    };

    return (
        <>
            <div className="product-info">
                <h3 className="product-title">Product Name</h3>
                <h4 className="product-price">$10</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <CardSection name={name} changeName={changeName}/>
                <button disabled={!stripe} className="btn-pay">Buy Now</button>
            </form>
            {
                (paymentProcessing)? <Spinner className="card-loading" color="success" children=""/> : <br/>
            }
            <div>
                <b className="card-error"> {errorMessage} </b>
                <b className="card-success"> {successMessage} </b>
            </div>
        </>
    );

}
export default CheckoutForm;
