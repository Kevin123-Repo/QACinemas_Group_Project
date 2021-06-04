const Comment = (props) => {
    const { comment } = props;
    console.log(comment);


    return (
        <tr>
            <td>{comment.username}</td>
            <td>{comment.comment}</td>
            <td>{comment.movieTitle}</td>
            <td>{comment.rating}</td>
        </tr>
    )

}

export default Comment;