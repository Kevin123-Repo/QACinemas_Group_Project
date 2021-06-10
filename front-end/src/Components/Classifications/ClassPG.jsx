import PG from '../../Images/Film Ratings/PG_Alpha.PNG'
import React, { useState } from 'react';
import { Collapse, CardFooter, Card, CardTitle, CardBody, Button } from 'reactstrap';

const ClassPG = () => {

    const [isOpenPG, setIsOpenPG] = useState(false);
    const togglePG = () => setIsOpenPG(!isOpenPG);
    const [isOpenPGRules, setIsOpenPGRules] = useState(false);
    const togglePGRules = () => setIsOpenPGRules(!isOpenPGRules)
    return (
        <>
            <CardBody>
                <center> <img aria-label="pg" src={PG} width="150" height="150" onClick={togglePG} /></center>
            </CardBody>
            <Collapse isOpen={isOpenPG}>
                <CardTitle onClick={togglePG}><b>Parental Guidance(PG)</b></CardTitle>
                <Card>
                    <CardBody>
                        This rating again is recommended for generally everyone although some scenes within the movie may be unsuitable for children younger than eight.
                        Children of any age without the company of a parent can purchase tickets for these movies.
                        As an advisory note parents should consider whether the content within a movie would cause upset or is too sensitive for their children.
                    </CardBody>
                    <Button color="primary" onClick={togglePGRules} style={{ marginBottom: '1rem' }}>Conditions</Button>
                    <Collapse isOpen={isOpenPGRules}>
                        <Card>
                            <CardBody>
                                <ul>
                                    <li>References to illegal drugs or drug misuse must be innocuous or carry a suitable anti-drug message.</li>
                                    <li>Mild bad language only</li>
                                    <li>Nudity is allowed with no sexual context.</li>
                                    <li>Sexual activity can be implied, but should be discreet.</li>
                                    <li>Violence will usually be mild.</li>
                                </ul>
                            </CardBody>
                        </Card>
                    </Collapse>
                    <CardFooter>
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/pg" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default ClassPG