import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import { Input, Col, Row, Container } from 'reactstrap';
import "./Styles.css";

function CardSection({name}) {
  return (
    <>
        <label htmlFor="cardName">Card Holder's Name</label>
        <Input type="text" placeholder={name} value={name} readOnly/>
        <label htmlFor="cardNumber">Card Number</label>
        <CardNumberElement/>
        <label htmlFor="cardExpiry">Card Expiry</label>
        <CardExpiryElement/>
        <label htmlFor="cardCVC">Card CVC</label>
        <CardCvcElement/>
    </>
  );
}

export default CardSection;