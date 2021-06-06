import CommentsForm from "./CommentsForm";
import CommentsTable from "./CommentsTable"
import axios from "axios";
import { useEffect, useState } from "react";

const DiscussionBoard = () => {

    const [update, setUpdate] = useState(false);
    const [data, setData] = useState([]);

    const handleUpdate = (e) => {
        setUpdate(c => !c);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8080/discussions/getAll")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error(error.message);
            });
    }, [update]);

    return (
        <>
            <h1>Disccusion Board</h1>
            <CommentsForm handleUpdate={handleUpdate}/>
            <CommentsTable data={data}/>
        </>
    )
}

export default DiscussionBoard;