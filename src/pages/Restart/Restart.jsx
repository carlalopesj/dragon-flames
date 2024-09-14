import './Restart.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import DerrotaImg from '../../assets/img-derrota.png';
import VitoriaImg from '../../assets/img-trofeu.png';

function Restart() {

    const [resultado, setResultado] = useState("");

    useEffect(() => {
        // Recupera o resultado da batalha do localStorage
        const resultado = localStorage.getItem("resultado");
        setResultado(resultado);
    }, []);

    return (
        <div className="restart-page">
            {resultado === "vitoria" ? (
                <div className='win'>
                    <img src={VitoriaImg} alt="Troféu" />
                    <h1>Parabéns, você venceu a batalha!</h1>
                </div>
            ) : (
                <div className='win'>
                    <img src={DerrotaImg} alt="Derrota"/> 
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