import React from 'react';
import { FormGroup, Input, Form, Button } from 'reactstrap';
import {Link } from "react-router-dom";
import { useState } from "react";



const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleFilter = (e) => {
        setSearchQuery(`/search/${e.target.value}`);
    }

    return(
        <>  
            
            <Form inline>
                <FormGroup>
                    <Input type="text" id="movieSearch" onInput={handleFilter} placeholder="Search Term"/> 
                </FormGroup>
                <Link to={searchQuery}><Button color="primary "type="submit" id="movieSearchSubmit">Submit</Button></Link>
            </Form>
            
        </>
    );
}

export default Searchbar;