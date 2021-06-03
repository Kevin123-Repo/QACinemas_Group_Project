import React from 'react';
import { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InteractiveCalendar from './InteractiveCalender';

const BookingForm = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [adults, setAdults] = useState(0);
    const [child, setChildren] = useState(0);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    
    return (
        <>

            <Container style={{ height: '500px', width: '500px' }}>
                <h3 style={{ fontWeight: 'bold' }}>Ticket Booking</h3>
                <Form >

                    <FormGroup>
                        <Label for="userName" disabled>Name</Label>
                        <Input type="text" name="name" id="qaCinemaName" placeholder="Enter your name" />
                    </FormGroup>
                    <br />

                    
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

                        <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm" >
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
                        <p>You have selected : {adults} adults and {child} children</p>
                        </Dropdown>

                   

                    <InteractiveCalendar />





                    <Button color="primary" type="submit">Send</Button>
                </Form>
            </Container>
        </>
    )
}

export default BookingForm;

//post request