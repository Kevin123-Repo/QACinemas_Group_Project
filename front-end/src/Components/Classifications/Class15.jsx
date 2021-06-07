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
                                    <li>Any References to drugs must be have clear educational purpose</li>
                                    <li>Infreguent use of only mild bad language</li>
                                    <li>Occasional nudity, no sexual context</li>
                                    <li>Only mild sexual behaviour like kissing </li>
                                    <li>Mild violence is acceptable if it is justified by context (i.e. comedic)</li>
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