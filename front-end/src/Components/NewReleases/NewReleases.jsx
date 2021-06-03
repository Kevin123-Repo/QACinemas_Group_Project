import axios from "axios";
import { useEffect, useState } from 'react';

const NewReleases = () => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let images = [];
        axios.get("http://localhost:8080/movies/getAll")
            .then((res) => {
                const DATA = res.data;
                console.log(DATA);
                for (let movie of DATA) {

                }
                setIsLoaded(true);
            }).catch((err) => {
                console.log(err.message);
                setIsLoaded(true);
            });
    }, []);

    if (isLoaded) {
        return (
            <h1> Placeholder </h1>
        );
    } else {
        return (
            <h1> Loading... </h1>
        );
    }
};

export default NewReleases;