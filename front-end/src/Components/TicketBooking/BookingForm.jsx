import React from 'react';
import { useState } from 'react';

import { Row, Col, Button, Form, FormGroup, Label, Input, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InteractiveCalendar from './InteractiveCalender';

const BookingForm = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
    const [dropdownOpenThree, setDropdownOpenThree] = useState(false);
    const [adults, setAdults] = useState(0);
    const [child, setChildren] = useState(0);
    const [seats, setSeats] = useState(0);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggleTwo = () => setDropdownOpenTwo(prevState => !prevState);
    const toggleThree = () => setDropdownOpenThree(prevState => !prevState);

    
    return (
        <>

            <Container style={{ height: '500px', width: '500px' }}>
                <h3 style={{ fontWeight: 'bold' }}>Ticket Booking</h3>
                <Form >
                    <br/>
                    <FormGroup>
                        <Label for="userName" disabled style={{fontWeight:'bold'}}>Name</Label>
                        <Input type="text" name="name" id="qaCinemaName" placeholder="Enter your name" />
                    </FormGroup>
                    <br />

                    
                    <Row>
                        <h5 style = {{fontWeight: 'bold'}}>Select the number of Adult and Children</h5>
                        <Col sm="2">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" >
                        <DropdownToggle caret>
                            Adults
                         </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={()=>setAdults(1)}  >1</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(2)}  >2</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(3)}  >3</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(4)} >4</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(5)} >5</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(6)} >6</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(7)} >7</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(8)} >8</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(9)} >9</DropdownItem>
                            <DropdownItem onClick={()=>setAdults(10)} >10</DropdownItem>
                        </DropdownMenu>
                        
                        </Dropdown>
                        </Col>
                        
                        <Col sm="2">
                        <Dropdown isOpen={dropdownOpenTwo} toggle={toggleTwo} size="sm" >
                        <DropdownToggle caret>
                            Children
                         </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={()=>setChildren(1)}  >1</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(2)}  >2</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(3)}  >3</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(4)} >4</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(5)} >5</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(6)} >6</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(7)} >7</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(8)} >8</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(9)} >9</DropdownItem>
                            <DropdownItem onClick={()=>setChildren(10)} >10</DropdownItem>
                        </DropdownMenu>
                        
                        </Dropdown>
                        </Col>
                        

                        <Col sm="2">
                        <Dropdown isOpen={dropdownOpenThree} toggle={toggleThree} size="sm" >
                        <DropdownToggle caret>
                            Seats
                         </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={()=>setSeats(1)}  >1</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(2)}  >2</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(3)}  >3</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(4)} >4</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(5)} >5</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(6)} >6</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(7)} >7</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(8)} >8</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(9)} >9</DropdownItem>
                            <DropdownItem onClick={()=>setSeats(10)} >10</DropdownItem>
                        </DropdownMenu>
                        
                        </Dropdown>
                        </Col>
                        <p>{adults} Adults and {child} Children with {seats} seats selected</p>
                        </Row>
                       

                   

                    <InteractiveCalendar />





                    <Button color="primary" type="submit">Send</Button>
                </Form>
            </Container>
        </>
    )
}

export default BookingForm;

//post request