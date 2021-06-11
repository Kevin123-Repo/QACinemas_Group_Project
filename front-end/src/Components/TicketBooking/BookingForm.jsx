import React from 'react';
import FormBooking from './FormBooking';
import { Container } from 'reactstrap';
import { useState, useEffect } from "react";
import axios from 'axios';


const BookingForm = (props) => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get("https://qacinemaproject.nw.r.appspot.com/movies/getCurrent")
            .then((res) => {
                const DATA = res.data;
                setData(DATA);
                setIsLoaded(true)
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true)
            })
        }, []);

    if (isLoaded) {
        return (
            <>
                <Container className="booking-div">
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