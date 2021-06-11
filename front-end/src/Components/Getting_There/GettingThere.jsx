import Cinema_Image from "../../Images/cinema_front.png"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GoogleMap from "./GoogleMap";

const GettingThere = (props) => {
    return (
        <>
            <Container className="gettingThere-div">
                <Row>
                    <Col lg="5">
                        <br/>
                        <div id="travel-info-div">
                            <h1>Public Transport</h1>
                            <p>You can get here by bus or by train! The closest station is Burley Park.</p>
                            <h1>Address</h1>
                            <p>Cardigan Fields,<br/>Kirkstall Rd,<br/>Burley,<br/>Leeds LS4 2DG</p>
                            <h1>Parking</h1>
                            <p>Parking is available on site. All available parking spaces and disabled priority spaces will be at the front of the venue!</p>
                        </div>
                    </Col>
                    <Col lg="1"></Col>
                    <Col className="map-info" lg="6">
                        <p>Please refer to the Map for exact location.</p>
                        <GoogleMap />
                    </Col>
                </Row>      
            </Container>
        </>
    );
}

export default GettingThere;