import CommentsForm from "./CommentsForm";
import CommentsTable from "./CommentsTable"

const DiscussionBoard = () => {
    return (
        <>
            <h1>Disccusion Board</h1>
            <CommentsForm/>
            <CommentsTable />
        </>
    )
}

export default DiscussionBoard;