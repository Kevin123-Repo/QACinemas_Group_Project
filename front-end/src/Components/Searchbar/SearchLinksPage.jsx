import { useParams } from "react-router";
import {Link } from "react-router-dom";

const SearchLinksPage = () => {

    let { query } = useParams();
    let link = `/movies/${query}`;

    // Type in film title exactly to return a working link

    return(
        <Link to={link}><h1>{query}</h1></Link>
    )
}

export default SearchLinksPage;