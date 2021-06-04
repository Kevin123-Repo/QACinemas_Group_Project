import React from 'react';
import { Row, FormGroup, Label, Input, Col } from 'reactstrap';
import {Link } from "react-router-dom";
import { useState } from "react";



const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleFilter = (e) => {
        setSearchQuery(`/search/${e.target.value}`);
    }

    return(
        <>  
            <Row>
                <FormGroup>
                
                    <Input type="text" id="movieSearch" onInput={handleFilter} placeholder="Search"/>
                    <Link to={searchQuery}><button type="submit">Submit</button></Link>
                    
                </FormGroup>
            </Row>
        </>
    );
}

export default Searchbar;