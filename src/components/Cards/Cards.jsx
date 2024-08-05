import './Cards.css';
import { Link } from 'react-router-dom';

function Cards(props) {
    return (
        <div className='cards-container'>
            <h2>{props.type}</h2>
            <img src={props.img} className='img-card'/>
            <Link to={props.link} className='link'><button className='btn-card'>{props.name}</button></Link>
        </div>
    )
}

export default Cards;