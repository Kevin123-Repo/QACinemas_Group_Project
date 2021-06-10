const Place = ({img, name, info, number, website}) => {
    return(
        <div className = 'toGoInfo'>
            <div className="places-img-container">
                <img src={img} alt={name} className={'places-imgs'}/>
            </div>
            <h2 align ='center'>{name}</h2>
            <p>{info}</p>
            <h5>Contact Details:</h5>
            <p>{number}</p>
            <p><a href={website}>Website</a></p>
        </div>
    )
}

export default Place;