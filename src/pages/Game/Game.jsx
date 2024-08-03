import './Game.css'
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import ImgLoja from '../../assets/fundo-loja-clara.jpg';
import ImgArena from '../../assets/fundo-arena-clara.jpg';
import ImgMissao from '../../assets/fundo-missoes-clara.jpg';

function Game() {
    return (
        <div className='game-page'>
            <Header />
            <div className="destiny-page">
                <h1> Qual será o seu destino? </h1>
                <div className='destiny-container'>
                    <Cards 
                    type="Loja"
                    img={ImgLoja}
                    name="Feira"
                    />
                    <Cards 
                    type="Arena"
                    img={ImgArena}
                    name="Ringue"
                    />
                    <Cards 
                    type="Missões"
                    img={ImgMissao}
                    name="Extra"
                    />
                </div>
            </div>
        </div>
    )
}

export default Game;