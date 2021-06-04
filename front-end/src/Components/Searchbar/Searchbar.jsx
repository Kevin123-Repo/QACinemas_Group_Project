import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import {Link } from "react-router-dom";
import { useState } from "react";



const Searchbar = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleFilter = (e) => {
        setSearchQuery(`/search/${e.target.value}`);
    }

    return(
        <>
            <FormGroup>
                <Label for="exampleText">Search</Label>
                <Input type="text" id="movieSearch" onInput={handleFilter}/>
                <Link to={searchQuery}><button type="submit">Submit</button></Link>
            </FormGroup>
        </>
    );
}

export default Searchbar;