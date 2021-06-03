const Person = ({ name, email, github, img }) => {
    return (
        <div className='PeronInfo'>
            <img src="" alt="" />
            <h3>{name}</h3>
            <h5>Contact Details</h5>
            <p>{email}</p>
            <p><a href={github}>GitHub Link</a></p>
        </div >
    )
}

export default Person;