
import './Characters.css';
import { Link } from 'react-router-dom';

function Characters(props) {
    
    // Initials 
    function saveData() {
        localStorage.setItem("Gold", props.gold);
        localStorage.setItem("Health", props.health);
        localStorage.setItem("XP", 0);
        localStorage.setItem("Weapon", "Sticky");
        const weapon = { nome: 'Sticky', poder: 10, custo: 10 }; 
        localStorage.setItem("Weapon", JSON.stringify(weapon));
    }

    return (
        <div className='character-container'>
            <h2>{props.type}</h2>
            <img src={props.img} className='img-character'/>
            <div className="infos">
                <p>Saúde: {props.health}</p>
                <p>Prata: {props.gold}</p>
            </div>
            <Link to='/game'className='link'>
            <button onClick={saveData}>{props.name}</button>
            </Link>
        </div>
    );
}

export default Characters;

