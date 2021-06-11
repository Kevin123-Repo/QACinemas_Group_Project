import { Accordion, Card } from 'react-bootstrap';
import { NavLink as Link } from 'react-router-dom'

const FaqAccordion = (props) => {
  

  return (
    <Accordion class ="Accordion" defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0" >
      Opening Times
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><h5 align='center'>Monday: 10:00 - 23:00</h5>
            <h5 align='center'>Tuesday: 10:00 - 23:00</h5>
            <h5 align='center'>Wednesday: 10:00 - 23:00</h5>
            <h5 align='center'>Thursday: 10:00 - 23:00</h5>
            <h5 align='center'>Friday: 10:00 - 00:00</h5>
            <h5 align='center'>Saturday: 10:00 - 00:00</h5>
            <h5 align='center'>Sunday: 10:00 - 22:00</h5></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Where can we find you?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! For further assistance please click the link to be taken to our <Link to="/GettingThere">Getting There</Link> page</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>

    <Accordion.Toggle as={Card.Header} eventKey="2">
      Where can we visit nearby?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Hello! For further assistance please click the link to be taken to our <Link to="/PlacesToGo">Places To Visit</Link> page</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="3">
      How can we contact a manager?
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="3">
      <Card.Body>Hello! For further assistance please click the link to be taken to our <Link to="/ContactPage">Contact Us</Link> page</Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="4">
      About
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="4">
      <Card.Body>Hello! For further assistance please click the link to be taken to our <Link to="/About">About</Link> page</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  );
}

export default FaqAccordion;
