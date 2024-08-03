import './Characters.css';
import ImgArc from '../../assets/Arc.jpg';
import { Link } from 'react-router-dom';
function Characters(props) {

    return (
        <div className='character-container'>
            <h2>{props.type}</h2>
            <img src={props.img} className='img-character'/>
            <div className="infos">
                <p>Saúde: {props.health}</p>
                <p>Prata: {props.gold}</p>
            </div>
            <button><Link to='/game' className='link'>{props.name}</Link></button>
        </div>
    );
}

export default Characters;