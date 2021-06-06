import cinemaImage from '../Images/Homepage-Cinema.jpg';
import { Col, Row, Container } from "reactstrap";

const Homepage = () => {

    return (
        <Container>
            <Row>
                <Col lg="4">
                    <h2>Welcome!</h2>
                    <p>
                        Welcome to QA Cinemas! Here you can browse all of the latest films, book tickets for showings in advance, and get a preview of new releases arriving in the near future!
                    </p>

                    <br />

                    <h2>QA Cinemas</h2>
                    <p>
                        QA Cinemas is the UK's premiere multiplex cinema chain, and the best destination to kick back, relax, and forget your worries for a few hours. Grab some popcorn and an extra large soft drink of your choice and be transported to a new world by the magic of cinema. Take your family, friends, or even just that special someone... yourself!
                    </p>
                </Col>
                <Col lg="2"></Col>
                <Col lg="4">
                    <img id="homepage-img" src={cinemaImage} alt="cinema screen" />
                </Col>
            </Row>
        </Container>
    );
}

export default Homepage;