import CommentsForm from "./CommentsForm";
import CommentsTable from "./CommentsTable"
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BadWordsFilter from "bad-words";

const DiscussionBoard = () => {
    const filter = new BadWordsFilter();

    const [update, setUpdate] = useState(false);
    const [data, setData] = useState([]);

    const handleUpdate = (e) => {
        setUpdate(c => !c);
    };

    const filterData = ({username, comment, movieTitle, rating}) => {
        return {username: filter.clean(username), comment: filter.clean(comment), movieTitle, rating};
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/discussions/getAll")
            .then((response) => {
                let dataArray = [];
                response.data.map((entry) => {
                    dataArray.push(filterData(entry));
                });
                setData(dataArray);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [update]);

    return (
        <>
        <Container className="board-div">
            <div id="board-title">
                <h1>Discussion Board</h1>
            </div>
            <CommentsTable data={data}/>
            <CommentsForm handleUpdate={handleUpdate}/>
        </Container>
        </>
    );
}

export default DiscussionBoard;