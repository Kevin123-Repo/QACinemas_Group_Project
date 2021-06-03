import CommentsForm from "./CommentsForm";
import CommentsTable from "./CommentsTable"
import { useState } from "react";

const DiscussionBoard = () => {
    const [update, setUpdate] = useState(false);

    const handleUpdate = (e) => {
        setUpdate(c=>!c);
      };
    return (
        <>
            <h1>Disccusion Board</h1>
            <CommentsForm handleUpdate={handleUpdate}/>
            <CommentsTable update={update}/>
        </>
    )
}

export default DiscussionBoard;