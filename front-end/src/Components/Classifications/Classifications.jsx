import U from '../../Images/Film Ratings/U.PNG'
import PG from '../../Images/Film Ratings/PG.PNG'
import TWELVE from '../../Images/Film Ratings/12.PNG'
import TWELVEA from '../../Images/Film Ratings/12A.PNG'
import FIFTHTEEN from '../../Images/Film Ratings/15.PNG'
import EIGHTEEN from '../../Images/Film Ratings/18.PNG'
import React, { useState } from 'react';





import { Collapse, CardFooter, Card, CardTitle, Row, Col, CardBody } from 'reactstrap';


const Classifications = () => {

    const [isOpenU, setIsOpenU] = useState(false);
    const [isOpenPG, setIsOpenPG] = useState(false);
    const [isOpen12A, setIsOpen12A] = useState(false);
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen15, setIsOpen15] = useState(false);
    const [isOpen18, setIsOpen18] = useState(false);


    const toggleU = () => setIsOpenU(!isOpenU);
    const togglePG = () => setIsOpenPG(!isOpenPG);
    const toggle12A = () => setIsOpen12A(!isOpen12A);
    const toggle12 = () => setIsOpen12(!isOpen12);
    const toggle15 = () => setIsOpen15(!isOpen15);
    const toggle18 = () => setIsOpen18(!isOpen18);



    return (
        <>
            <h1><center> <u> Classifications </u> </center> </h1>
            <Row>
                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={U} width="150" height="150" onClick={toggleU} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpenU}>
                            <CardTitle onClick={toggleU}><b>Universal(U)</b></CardTitle>

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
                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={PG} width="150" height="150" onClick={togglePG} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpenPG}>
                            <CardTitle onClick={togglePG}><b>Parental Guidance(PG)</b></CardTitle>

                            <Card>
                                <CardBody>
                                    This rating again is recommended for generally everyone although some scenes within the movie may be unsuitable for children younger than eight.
                                    Children without the company of a parent can purchase tickets for these movies.
                                    As an advisory note parents should consider whether the content within a movie would cause upset or is too sensitive for their children.
                             </CardBody>
                                <CardFooter>
                                    <center>
                                        <a href="https://www.bbfc.co.uk/rating/pg" target="_blank">Additional Info</a>
                                    </center>
                                </CardFooter>
                            </Card>
                        </Collapse>




                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={TWELVEA} width="150" height="150" onClick={toggle12A} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpen12A}>
                            <CardTitle onClick={toggle12A}><b>Parental Guidance(PG)</b></CardTitle>

                            <Card>
                                <CardBody>
                                    This rating again is recommended for generally everyone although some scenes within the movie may be unsuitable for children younger than eight.
                                    Children without the company of a parent can purchase tickets for these movies.
                                    As an advisory note parents should consider whether the content within a movie would cause upset or is too sensitive for their children.
                             </CardBody>
                                <CardFooter>
                                    <center>
                                        <a href="https://www.bbfc.co.uk/rating/12" target="_blank">Additional Info</a>
                                    </center>
                                </CardFooter>
                            </Card>
                        </Collapse>




                    </Card>
                </Col>

                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={TWELVE} width="150" height="150" onClick={toggle12} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpen12}>
                            <CardTitle onClick={toggle12}><b>Parental Guidance(PG)</b></CardTitle>

                            <Card>
                                <CardBody>
                                    All the same rules as 12A.
                                    Again not suitable for anyone younger than 12.
                                    Children under 12 must be accompanied by an adult to view these movies.
                                    Also no one younger than 12 can purchase or rent a 12 rated work.

                             </CardBody>
                                <CardFooter>
                                    <center>
                                        <a href="https://www.bbfc.co.uk/rating/12" target="_blank">Additional Info</a>
                                    </center>
                                </CardFooter>
                            </Card>
                        </Collapse>
                    </Card>
                </Col>


            </Row >

            <Row>

                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={FIFTHTEEN} width="150" height="150" onClick={toggle15} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpen15}>
                            <CardTitle onClick={toggle15}><b>Parental Guidance(PG)</b></CardTitle>

                            <Card>
                                <CardBody>
                                    Anyone younger than 15 cannot watch these movies in a cinema.
                                    Anyone younger than 15 cannot buy or rent movies with this rating.

                             </CardBody>
                                <CardFooter>
                                    <center>
                                        <a href="https://www.bbfc.co.uk/rating/15" target="_blank">Additional Info</a>
                                    </center>
                                </CardFooter>
                            </Card>
                        </Collapse>
                    </Card>
                </Col>

                <Col sm="6">
                    <Card body>
                        <CardBody>
                            <center> <img src={EIGHTEEN} width="150" height="150" onClick={toggle18} /></center>
                        </CardBody>
                        <Collapse isOpen={isOpen18}>
                            <CardTitle onClick={toggle18}><b>18</b></CardTitle>

                            <Card>
                                <CardBody>
                                    No one younger than may watch these movies in a cinema, nor can they purchase or rent 18 rated movies.
                                    Adults should be free to decide what entertainment they themselves view.

                             </CardBody>
                                <CardFooter>
                                    <center>
                                        <a href="https://www.bbfc.co.uk/rating/18" target="_blank">Additional Info</a>
                                    </center>
                                </CardFooter>
                            </Card>
                        </Collapse>
                    </Card>
                </Col>


            </Row>




        </>
    );
};





export default Classifications;