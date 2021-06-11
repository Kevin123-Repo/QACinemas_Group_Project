import { useState } from 'react';
import { useElements, useStripe, CardNumberElement, CardExpiryElement, CardCvcElement} from "@stripe/react-stripe-js";
import { Spinner, Button } from 'reactstrap';
import axios from "axios";
import CardSection from "./CardSection";
import { Redirect } from 'react-router';

const CheckoutForm = ({bookingInfo}) => {

    const stripe = useStripe();
    const elements = useElements();

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [redirect, setRedirect] = useState(null);

    const [address_city, setAddress_city] = useState("");
    const [address_country, setAddress_country] = useState("GB");
    const [address_line1, setAddress_line1] = useState("");
    const [address_line2, setAddress_line2] = useState("");
    const [address_zip, setAddress_zip] = useState("");
    const [email, setEmail] = useState("");

    const name = bookingInfo.name;
    const PRICE = +((bookingInfo.adults * 7.99) + (bookingInfo.child * 5.99) + (bookingInfo.concession * 3.99)).toFixed(2); // 2 Decimal places + str -> num conversion (unary +)


    const validateForm = () => {
        if (address_line1 === "") {
            setErrorMessage("Address line 1 is a required field");
            return false;
        } else if (address_city === "") {
            setErrorMessage("City is a required field");
            return false;
        } else if (address_zip === "") {
            setErrorMessage("Postal Code is a required field");
            return false;
        } else if (email === "") {
            setErrorMessage("Email is a required field");
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !validateForm()) {
            return;
        }

        const data = {name, address_line1, address_line2, address_city, address_country, address_zip, email};
        bookingInfo.billing_details = data;
        const card = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);
        const result = await stripe.createToken(card, data);

        if (result.error) {
            console.log(result.error.message);
            setSuccessMessage(null);
            setErrorMessage(result.error.message);
        } else {
            setPaymentProcessing(true);
            axios.post("https://qacinemaproject.nw.r.appspot.com/bookings/payment", {price: PRICE, token: result.token, booking: bookingInfo})
                .then((res) => {
                    const emailData = {
                        service_id: 'service_6hyhf2k',
                        template_id: 'template_3g35ied',
                        user_id: 'user_ZU83c2XlWYoKypqo2h3DF',
                        template_params: {
                            'email_to': email, 
                            'to_name': name,
                            'reply_to': 'QACinemas@madeupmail.com',
                            'message' : res.data
                        }
                    };
                    axios.post("https://api.emailjs.com/api/v1.0/email/send", emailData)
                        .then((res) => {
                            setErrorMessage(null);
                            setSuccessMessage("Payment processed and receipt sent via Email.");
                            setTimeout(() => setRedirect("/OrderSummary"), 2000);
                        }).catch((err) => {
                            console.error(err.message);
                            setPaymentProcessing(false);
                            setSuccessMessage(null);
                            setErrorMessage(err.message);
                        });
                }).catch((err) => {
                    console.error(err.message);
                    setPaymentProcessing(false);
                    setSuccessMessage(null);
                    setErrorMessage(err.message);
                });
        }
    };

    if (redirect) {
        bookingInfo.Price = PRICE;
        return <Redirect to = {{
            pathname: redirect,
            state: bookingInfo
        }}/>
    } else return (
        <>
            <div className="payment-form">
                <form onSubmit={handleSubmit}>
                    <CardSection 
                        name           = {bookingInfo.name} 
                        city           = {address_city} 
                        setCity        = {setAddress_city} 
                        country        = {address_country} 
                        setCountry     = {setAddress_country} 
                        line1          = {address_line1} 
                        setLine1       = {setAddress_line1} 
                        line2          = {address_line2} 
                        setLine2       = {setAddress_line2} 
                        address_zip    = {address_zip} 
                        setAddress_zip = {setAddress_zip} 
                        email          = {email}
                        setEmail       = {setEmail}
                    />
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
