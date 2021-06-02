import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

const EmailForm = (props) => {

    
    return (
        <Container style= {{height: '500px', width: '500px'}}>
            <Form >
            <FormGroup>
                    <Label for="exampleEmail" disabled>Owners Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="owneremail@qacinema.com" disabled />
                </FormGroup>


                <FormGroup>
                    <Label for="exampleEmail" disabled>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="owneremail@qacinema.com" disabled />
                </FormGroup>



                <FormGroup>
                    <Label for="exampleSelect">Rate your visit!</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleText">Enter your message here!</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>

                <Button>Send</Button>
            </Form>
        </Container>
    );
}

export default EmailForm;
