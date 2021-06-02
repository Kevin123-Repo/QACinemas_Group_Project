import Cinema_Image from "../../Images/Everyman_cinema_Barnet.jpg"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GoogleMap from "./GoogleMap";

const GettingThere = (props) => {
    return (
        <>
            <Container>
                {/* Public Transport row and col */}
                <Row>
                    <Col ><h1>Public Transport</h1></Col>
                </Row>

                <Row>
                    <Col><p>You'll find us at [address here]. You can get here by bus or by tube! The closest station is [tube station]</p>
                    </Col>
                </Row>

                {/* Parking row and col */}
                <Row>
                    <Col lg="1"><h1>Parking</h1></Col>
                </Row>

                <Row>
                    <Col><p>Our facilities has state of the art accessability. Parking included! All available parking spaces and disabled priority spaces will be at the front of the venue!</p>
                     <img src={Cinema_Image} width = "40%" /></Col>
                </Row>


                {/* Address and Map row and col */}
                <Row>
                    <Col lg="1"><h1>Address</h1></Col>
                </Row>

                <Row>
                    <Col><p>You'll find us at [address here]. Please refer to the Map for further assistance!</p>
                        <GoogleMap /></Col>
                </Row>





            </Container>
        </>
    )
}

export default GettingThere;