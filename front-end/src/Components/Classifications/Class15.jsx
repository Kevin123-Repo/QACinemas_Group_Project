import FIFTHTEEN from '../../Images/Film Ratings/15_Alpha.PNG'
import { Collapse, CardFooter, Card, CardTitle, Button, CardBody } from 'reactstrap';
import React, { useState } from 'react'

const Class15 = () => {
    const [isOpen15, setIsOpen15] = useState(false);
    const toggle15 = () => setIsOpen15(!isOpen15);
    const [isOpenRules, setIsOpenRules] = useState(false);
    const toggleRules = () => setIsOpenRules(!isOpenRules)

    return (
        <>
            <CardBody>
                <center> <img src={FIFTHTEEN} width="150" height="150" onClick={toggle15} /></center>
            </CardBody>
            <Collapse isOpen={isOpen15}>
                <CardTitle onClick={toggle15}><b>15</b></CardTitle>
                <Card>
                    <CardBody>
                        Anyone younger than 15 cannot watch these movies in a cinema.
                        Anyone younger than 15 cannot buy or rent movies with this rating.
         </CardBody>
                    <Button color="primary" onClick={toggleRules} style={{ marginBottom: '1rem' }}>Conditions</Button>
                    <Collapse isOpen={isOpenRules}>
                        <Card>
                            <CardBody>
                                <ul>
                                    <li>Drugs may be consumed but promotion or encouragement of drug misuse is prohibited</li>
                                    <li>Strong language is permitted verys strong language may appear infrequently</li>
                                    <li>No constraints on nudity</li>
                                    <li>Sexual activity can be portrayed but not in strong detail</li>
                                    <li>Violence may be strong but should not dwell on the infliction of pain or injury</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <CardFooter>
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/15" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default Class15;