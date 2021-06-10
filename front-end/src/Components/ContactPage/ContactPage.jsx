import { Container, Row, Col } from "reactstrap";
import EmailForm from "./EmailForm"
import contactImage from "../../Images/Homepage-Cinema.jpg";

const ContactPage = () => {
    return (
        <>
            <Container className="contact-div">
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }} >
                        <h1 style={{ fontWeight: 'bold' }} >Contact Us</h1>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg="3">
                        <div id="address-info-div">
                            <h3>Learning Center</h3>
                            <p>8th Floor
                            <br />
                            St James Buildings
                            <br />
                            79 Oxford Street
                            <br />
                            Manchester
                            <br />
                            M1 6FQ</p>
                        </div>
                    </Col>
                    <Col lg="6"> <EmailForm /> </Col>
                </Row>
            </Container>
        </>
    );
}

export default ContactPage;