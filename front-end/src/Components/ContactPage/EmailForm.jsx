import emailjs from "emailjs-com";
import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const EmailForm = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_7u3b3jg', 'template_pvllszp', e.target, 'user_eC48rHHnaMqoHviOaG5VN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <Container id="contact-form-div">
                <h3 style = {{fontWeight: 'italic'}}>Contact the manager!</h3>
                <Form onSubmit={sendEmail}>
                    
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input type="text" name="name" id="nameText" placeholder="Enter your name here!"  />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" disabled>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email here!"  />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Enter your message here!</Label>
                        <Input type="textarea" rows="8" name="message" id="exampleText" />
                    </FormGroup>

                    <Button color="primary" type="submit">Send</Button>
                </Form>
            </Container>
        </>
    );
}


export default EmailForm;
