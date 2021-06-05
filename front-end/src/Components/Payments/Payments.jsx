import CheckoutForm from "./CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Payments = ({name}) => {
    const stripePromise = loadStripe('pk_test_51IyD7qIkKzhuH6slV7xoJw1wjAKzDYmQYZThbZwsQoBIubUovrsTSA1cYecxM8Ra3chsgRA8tuzEOyEmytv5oa7Y00I8Qz1foA');

    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm name={name}/>
            </Elements>
        </>
    );
}
export default Payments;