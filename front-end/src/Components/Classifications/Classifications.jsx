import U from '../../Images/Film Ratings/U.PNG'
import PG from '../../Images/Film Ratings/PG.PNG'
import TWELVE from '../../Images/Film Ratings/12.PNG'
import TWELVEA from '../../Images/Film Ratings/12A.PNG'
import FIFTHTEEN from '../../Images/Film Ratings/15.PNG'
import EIGHTEEN from '../../Images/Film Ratings/18.PNG'
import React, { useState } from 'react';





import { Collapse, CardFooter, Card, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';


const Classifications = () => {

    const [isOpenU, setIsOpenU] = useState(false);
    const [isOpenPG, setIsOpen] = useState(false);

    const toggleU = () => setIsOpenU(!isOpenU);
    const togglePG = () => setIsOpen(!isOpenPG);



    return (
        <>

            <Col sm="6">
                <Card body>
                    <CardBody>
                        <center> <img src={U} width="150" height="150" onClick={toggleU} /></center>
                    </CardBody>
                    <CardTitle onClick={toggleU}><b>Universal(U)</b></CardTitle>
                    <Collapse isOpen={isOpenU}>
                        <Card>
                            <CardBody>
                                This ratings implies the movie is suitable for anyone aged four and above.
                                Although with children this is a guideline as it can be hard to envisage what topics are scaring children.
                                A general rule for any films aiming for a U rating is to have a positive theme throughout the film.
                                Minalisation of violence, threat or horror is the best practice although inclusion of any should be rebuffed in a reassuring manner.
                 </CardBody>
                            <CardFooter>
                                <center>
                                    <a href="https://www.bbfc.co.uk/rating/U" target="_blank">Additional Info</a>
                                </center>
                            </CardFooter>
                        </Card>
                    </Collapse>

                </Card>



            </Col>



        </>

    )
};





export default Classifications;