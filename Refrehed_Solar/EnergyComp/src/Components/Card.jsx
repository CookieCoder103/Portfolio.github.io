import './styles/Card.css'

function Card(props){
    return(
        <div className="cardContainer">
            <img className='cardImg' src={props.cardImg} />
            <h3 className='cardTitle'>{props.cardTitle}</h3>
            <p className='cardText'>{props.cardText}</p>
        </div>
    );
}

export default Card