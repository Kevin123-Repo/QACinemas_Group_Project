import { CardElement, CardNumberElement, CardExpiryElement, CardCvcElement} from '@stripe/react-stripe-js';
import { Input, Col, Row, Container } from 'reactstrap';
import "./Styles.css";

function CardSection({name, changeName}) {
  return (
    <Container>
      <Col md={4}>
        <label htmlFor="cardName">Card Holder's Name</label>
        <Input type="text" placeholder="Card Holder's Name" value={name} onChange={(e) => changeName(e.target.value)}/>
      </Col>
      <Col md={4}>
        <label htmlFor="cardNumber">Card Number</label>
        <CardNumberElement/>
      </Col>
      <Row >
        <Col md={2}>
          <label htmlFor="cardExpiry">Card Expiry</label>
          <CardExpiryElement/>
        </Col>
        <Col md={2}>
          <label htmlFor="cardCVC">Card CVC</label>
          <CardCvcElement/>
        </Col>
      </Row>
    </Container>
  );
}

export default CardSection;