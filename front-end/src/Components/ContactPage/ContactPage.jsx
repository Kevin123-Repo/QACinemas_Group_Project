import { Container, Row, Col } from "reactstrap";
import EmailForm from "./EmailForm"
import contactImage from "../../Images/Homepage-Cinema.jpg";

const ContactPage = () => {
    return (
        <>
            <Container >

                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }} >
                        <h1 style={{ fontWeight: 'bold' }} >Contact Us</h1></Col>
                </Row>

                <br />
                <br />


                <Row>
                    <Col>
                        <h3>Learning Center</h3>

                        <p>8th Floor
                        <br />
                         St James Buildings
                        <br />
                        79 Oxford Street
                        <br />
                        Manchester
                        <br />
                        M1 6FQ</p></Col>

                    <Col> <EmailForm /></Col>
                    <Col> <img src={contactImage} width="100%" alt="Inside of Cinema" /></Col>
                </Row>









            </Container>







        </>
    )

}

export default ContactPage;