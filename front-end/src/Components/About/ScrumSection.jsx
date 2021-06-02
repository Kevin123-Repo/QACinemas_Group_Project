import { Collapse, CardFooter, Card, CardTitle, CardText, Row, Col, CardBody } from 'reactstrap';

const ScrumSection = () => {


    return (

        <Card >
            <CardBody>

            </CardBody>

            <CardTitle ><center><b>About Scrum</b></center></CardTitle>

            <Card>
                <CardBody>
                    This ratings implies the movie is suitable for anyone aged four and above.
                    Although with children this is a guideline as it can be hard to envisage what topics are scaring children.
                    A general rule for any films aiming for a U rating is to have a positive theme throughout the film.
                    Minalisation of violence, threat or horror is the best practice although inclusion of any should be rebuffed in a reassuring manner.
                </CardBody>
                <CardFooter>
                    <center>
                        <a href="https://www.scrum.org/" target="_blank">Scrum.org</a>
                    </center>
                </CardFooter>
            </Card>


        </Card>

    )

}
export default ScrumSection;