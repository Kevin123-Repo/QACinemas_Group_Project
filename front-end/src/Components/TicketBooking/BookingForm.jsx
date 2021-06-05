import React from 'react';
import FormBooking from './FormBooking';
import { Container } from 'reactstrap';
import { useState, useEffect } from "react";
import axios from 'axios';


const BookingForm = (props) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8080/movies/getCurrent")
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
                console.log(DATA);
                setIsLoaded(true)
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true)
            })
        }, []);

    if (isLoaded) {
        return (
            <>
                <Container className="booking-div" style={{ width: '50vw' }}>
                    <FormBooking data = {data}/>
                </Container>
            </>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
    
}

export default BookingForm;

//post request