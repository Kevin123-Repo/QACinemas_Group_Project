import FrankieAndBennys from '../../Images/FrankieAndBennys.jpg';
const Frankie = ({img, name, info, number, website}) => {
    return(
        <div className = 'ToGoInfo'>
            <img src = {img} alt={name} className='ToGoImg'/>
            <h2 align ='center'>{name}</h2>
            <p>{info}</p>
            <h5>Contact Details:</h5>
            <p>{number}</p>
            <p><a href={website}>Website</a></p>
        </div>
    )
}

export default Frankie;