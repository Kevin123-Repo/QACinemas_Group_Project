import Cinema_Image from "../../Images/cinema_front.png"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GoogleMap from "./GoogleMap";

const GettingThere = (props) => {
    return (
        <>
            <Container className="gettingThere-div">
                <Row>
                    <Col lg="4">
                        <h1>Public Transport</h1>
                    </Col>
                    <Col lg="4"/>
                    <Col lg="1">
                        <h1>Address</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="5">
                        <p>You'll find us at Cardigan Fields, Kirkstall Rd, Burley, Leeds LS4 2DG. You can get here by bus or by tube!<br/>The closest station is Burley Park.</p>
                    </Col>
                    <Col lg="1"></Col>
                    <Col className="map-info" lg="6">
                        <p>Please refer to the Map for exact location.</p>
                        <GoogleMap />
                    </Col>
                </Row>
                <Row>
                    <Col lg="1">
                        <h1>Parking</h1>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg="6">
                        <p>Our facilities has state of the art accessability. Parking included! All available parking spaces and disabled priority spaces will be at the front of the venue!</p>
                        <img className="cinema-front" src={Cinema_Image} alt =""/>
                    </Col>
                </Row>        
            </Container>
        </>
    );
}

export default GettingThere;