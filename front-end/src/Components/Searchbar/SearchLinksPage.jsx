import { useParams } from "react-router";

const SearchLinksPage = () => {

    let { query } = useParams();

    return(
        <h1>{query}</h1>
    )
}

export default SearchLinksPage;