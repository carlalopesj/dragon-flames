import './Game.css';
import Header from '../../components/Header/Header';
import Cards from '../../components/Cards/Cards';
import ImgStore from '../../assets/backgrounds/background-store-clean.jpg';
import ImgArena from '../../assets/backgrounds/background-arena-clean.jpg';
import ImgMission from '../../assets/backgrounds/background-missions-clean.jpg';

function Game() {

    const locals = [
        { id: 1, type: "Loja", image: ImgStore, name: "Feira", link: '/store' },
        { id: 2, type: "Arena", image: ImgArena, name: "Ringue", link: '/arena' },
        { id: 3, type: "Missões", image: ImgMission, name: "Extra", link: '/mission' }
    ];

    return (
        <div className='game-page'>
            <Header />
            <div className="destiny-page">
                <h1> Qual será o seu destino? </h1>
                <div className='destiny-container locals'>
                    {locals.map((local) => (
                        <Cards
                            key={local.id}
                            type={local.type}
                            img={local.image}
                            name={local.name}
                            link={local.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Game;
