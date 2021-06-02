import Cinema_Image from "../../Images/Everyman_cinema_Barnet.jpg"
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Google_Map from "./Google_Map";


const Getting_There = (props) => {
    return (
        <>
            <Container>
                <Row>
                    <Col><h1>Address</h1></Col>
                    <Col><h1>Public Transport</h1>
                    <p>Closest tube station is ...</p></Col>
                    <Col><h1>Parking</h1>
                   </Col>
                    <Col><Google_Map/></Col>

                </Row>


                <Row>
                    <Col><img src={Cinema_Image} width="350" height="350"></img></Col>
                </Row>


            </Container>
        </>
    )
}

export default Getting_There;