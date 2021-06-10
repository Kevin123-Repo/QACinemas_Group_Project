import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Redirect } from "react-router-dom";

const FormBooking = ({ data }) => {

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dropDownItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenTwo, setDropdownOpenTwo] = useState(false);
    const [dropdownOpenThree, setDropdownOpenThree] = useState(false);
    const [dropdownOpenMovie, setDropdownOpenMovie] = useState(false);
    const [dropdownOpenMovieTimes, setDropdownOpenMovieTimes] = useState(false);
    const [dropdownConcessions, setDropdownConcessions] = useState(false);

    const [name, setName] = useState("");
    const [adults, setAdults] = useState("Adults");
    const [child, setChildren] = useState("Children");
    const [concession, setConcession] = useState("Concession");
    const [seats, setSeats] = useState("Seats");
    const [selectedMovie, setSelectedMovie] = useState("Movies");
    const [selectedTime, setSelectedTime] = useState("Times");
    const [times, setTimes] = useState([]);
    const [days, setDays] = useState([]);
    const [date, setDate] = useState(new Date());
    const [redirect, setRedirect] = useState(null);

    const changeDate = (date) => {
        setDate(date);
    };

    const validateForm = () => {

        let adultsTickets = (adults === "Adults")? 0 : parseInt(adults);
        let childTickets =  (child === "Children")? 0 : parseInt(child);
        let concessionTickets = (concession === "Concession")? 0 : parseInt(concession);

        if (seats === "Seats" || name === "" || selectedMovie === "Movies" || selectedTime === "Times") {
            alert("Please complete the form before continuing");
            return false;
        }

        if ((adultsTickets + childTickets + concessionTickets) !== parseInt(seats)) {
            alert("Number of Seats must be equal to number of tickets");
            return false;
        }

        return true;
    }

    useEffect(() => {
        let daysArr = [];
        for (let obj of data) {
            if (obj.title === selectedMovie) {
                for (let entry of obj.showingTimes) {
                    daysArr.push(daysOfWeek.indexOf(entry.day));
                    if (entry.day === daysOfWeek[date.getDay()]) {
                        setTimes(entry.times);
                    }
                }
            }
        }
        setDays(daysArr);
    }, [selectedMovie, date]);

    const submitBooking=(e)=>{
        e.preventDefault();
        if (validateForm()) {
            setRedirect("/Payments");
        }
    }

    if (redirect) {
        return <Redirect to = {{
            pathname: redirect,
            state: { 
                name : name, 
                movieTitle : selectedMovie,
                date : date,
                time : selectedTime,
                numberOfSeats: seats,
                adults : (adults === "Adults")? 0 : adults,
                child: (child === "Children")? 0 : child,
                concession: (concession === "Concession")? 0 : concession 
            } 
        }}/>
    } else return (
        <>
            <Form className="booking-form" onSubmit={submitBooking}>
                <h3 style={{ fontWeight: 'bold' }}>Ticket Booking</h3>
                <h5 style={{ fontWeight: 'bold' }}>Name:</h5>
                <Input type="text" className="booking-name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />

                <br />

                <h5 style={{ fontWeight: 'bold' }}>Adult, Children, Concessions and Seats</h5>
                <Row>
                    <Col className="dropdowns">
                        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                                {adults}
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    dropDownItems.map((item) => (
                                        <DropdownItem aria-label={`adult${item}`} key={item} value={item} onClick={(e) => setAdults(e.target.value)}>{item}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown isOpen={dropdownOpenTwo} toggle={() => setDropdownOpenTwo(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                                {child}
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    dropDownItems.map((item) => (
                                        <DropdownItem key={item} value={item} onClick={(e) => setChildren(e.target.value)}>{item}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>

                        <Dropdown isOpen={dropdownConcessions} toggle={() => setDropdownConcessions(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                                {concession}
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    dropDownItems.map((item) => (
                                        <DropdownItem key={item} value={item} onClick={(e) => setConcession(e.target.value)}>{item}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
               
                        <Dropdown isOpen={dropdownOpenThree} toggle={() => setDropdownOpenThree(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                                {seats} 
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    dropDownItems.map((item) => (
                                        <DropdownItem aria-label={`seat${item}`} key={item} value={item} onClick={(e) => setSeats(e.target.value)}>{item}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>

                <br />
                
                <h5 style={{ fontWeight: 'bold' }}>Select the Movie and Time</h5>
                <Row>
                    <Col className="dropdowns">
                        <Dropdown isOpen={dropdownOpenMovie} toggle={() => setDropdownOpenMovie(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                                {selectedMovie}
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    data.map((obj, i) => (
                                        <DropdownItem aria-label={`movie${i}`} onClick={(e) => setSelectedMovie(obj.title)} key={i} >{obj.title}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown isOpen={dropdownOpenMovieTimes} toggle={() => setDropdownOpenMovieTimes(prevState => !prevState)} size="sm" >
                            <DropdownToggle caret className="booking-dropdown">
                            {selectedTime}
                            </DropdownToggle>
                            <DropdownMenu flip={false}>
                                {
                                    times.map((time, i) => (
                                        <DropdownItem aria-label={`time${i}`} onClick={(e) => setSelectedTime(time)} key={i} >{time}</DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>

                <br/>

                <div>
                    <h5 style={{ fontWeight: 'bold' }}>Select a Date</h5>
                    <Calendar
                        minDate={new Date()}
                        onChange={changeDate}
                        value={date}
                        tileDisabled={({ date }) => !days.includes(date.getDay())}
                    />
                </div>
                <Button id="booking-btn" color="primary" type="submit">Send</Button>
            </Form>
        </>
    );
}

export default FormBooking;