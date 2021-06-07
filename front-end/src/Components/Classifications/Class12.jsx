import TWELVE from '../../Images/Film Ratings/12_ALPHA.PNG'
import React, { useState } from 'react'
import { Collapse, CardFooter, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Class12 = () => {
    const [isOpen12, setIsOpen12] = useState(false);
    const [isOpen12Rules, setIsOpen12Rules] = useState(false);
    const toggle12Rules = () => setIsOpen12Rules(!isOpen12Rules)
    const toggle12 = () => setIsOpen12(!isOpen12);

    return (
        <>
            <CardBody>
                <center> <img src={TWELVE} width="150" height="150" onClick={toggle12} /></center>
            </CardBody>
            <Collapse isOpen={isOpen12}>
                <CardTitle onClick={toggle12}><b>12</b></CardTitle>
                <Card>
                    <CardBody>
                        All the same rules as 12A.
                        Again not suitable for anyone younger than 12.
                        Children under 12 must be accompanied by an adult to view these movies.
                        Also no one younger than 12 can purchase or rent a 12 rated work.
                        </CardBody>

                    <Button color="primary" onClick={toggle12Rules} style={{ marginBottom: '1rem' }}>Conditions</Button>
                    <Collapse isOpen={isOpen12Rules}>
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
                    <CardFooter >
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/12" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default Class12;