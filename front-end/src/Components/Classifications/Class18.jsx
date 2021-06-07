import EIGHTEEN from '../../Images/Film Ratings/18_Alpha.PNG'
import { Collapse, CardFooter, Card, CardTitle, CardBody, Button } from 'reactstrap';
import React, { useState } from 'react'

const Class18 = () => {
    const [isOpen18, setIsOpen18] = useState(false);
    const toggle18 = () => setIsOpen18(!isOpen18);
    const [isOpen12Rules, setIsOpen12Rules] = useState(false);
    const toggle12Rules = () => setIsOpen12Rules(!isOpen12Rules)
    return (
        <>
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
                    <CardFooter>
                        <center>
                            <a href="https://www.bbfc.co.uk/rating/18" target="_blank">Additional Info</a>
                        </center>
                    </CardFooter>
                </Card>
            </Collapse>
        </>
    )
}
export default Class18;