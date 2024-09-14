import './Restart.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import ImgDefeat from '../../assets/defeat.png';
import ImgVictory from '../../assets/victory.png';

function Restart() {

    const [result, setResult] = useState("");

    useEffect(() => {
        // Retrieves battle result from localStorage
        const result = localStorage.getItem("result");
        setResult(result);
    }, []);

    return (
        <div className="restart-page">
            {result === "victory" ? (
                <div className='victory'>
                    <img src={ImgVictory} alt="Troféu" />
                    <h1>Parabéns, você venceu a batalha!</h1>
                </div>
            ) : (
                <div>
                    <img src={ImgDefeat} alt="Derrota"/> 
                    <h1>Que pena, você foi derrotado!</h1>
                </div>
            )}
            <Link to='/character'className='link'>
            <button>Jogar de novo</button>
            </Link>
        </div>
    )
}

export default Restart;