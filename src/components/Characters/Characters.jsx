import { useContext, useState } from 'react';
import './Characters.css';
import { Link } from 'react-router-dom';
import { PlayerContext } from '../../Context';

function Characters(props) {

    const { setPlayerData } = useContext(PlayerContext);

    function selectPlayer() {
        setPlayerData({
            health: props.health,
            gold: props.gold
        })
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
                <button onClick={selectPlayer}>{props.name}</button>
            </Link>
        </div>
    );
}

export default Characters;

