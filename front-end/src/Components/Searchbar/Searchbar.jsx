import React from 'react';
import { Row, FormGroup, Input, Form } from 'reactstrap';
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
                <Link to={searchQuery}><button type="submit" id="movieSearchSubmit">Submit</button></Link>
            </Form>
            
        </>
    );
}

export default Searchbar;