import './Cards.css';
import { Link } from 'react-router-dom';

function Cards(props) {
    return (
        <div className='cards-container'>
            <h2>{props.type}</h2>
            <img src={props.img} className='img-card'/>
            <button className='btn-card'><Link to='/' className='link'>{props.name}</Link></button>
        </div>
    )
}

export default Cards;