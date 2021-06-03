import React from 'react';
import { useState } from 'react';

import { Button, Form, FormGroup, Label, Input, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import InteractiveCalendar from './InteractiveCalender';

const BookingForm = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <>

            <Container style={{ height: '500px', width: '500px' }}>
                <h3 style={{ fontWeight: 'bold' }}>Ticket Booking</h3>
                <Form >



                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret>
                            Select your movie
                         </DropdownToggle>
                        <DropdownMenu>

                        </DropdownMenu>
                    </Dropdown>

                    <InteractiveCalendar />

                    <FormGroup>
                        <Label for="exampleEmail" disabled>Number of seats</Label>
                        <Input type="text" name="email" id="exampleEmail" placeholder="Enter the number of seats" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Enter your message here!</Label>
                        <Input type="textarea" name="message" id="exampleText" />
                    </FormGroup>

                    <Button color="primary" type="submit">Send</Button>
                </Form>
            </Container>
        </>
    )
}

export default BookingForm;

//post request