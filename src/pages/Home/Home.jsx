import './Home.css';
import { Link } from 'react-router-dom';
import ImgDragon from '../../assets/monsters/dragon.jpg';
import { FaPlay } from "react-icons/fa6";

function Home() {
    return (
        <div className="home-page">
            <div>
                <h1 id="title">Dragon Flames</h1>
                <img id="img-dragon" src={ImgDragon} />
                <p id="description" >Venha fazer parte desse mundo mágico, enfrente os perigos, arrisque sua sorte e faça suas estratégias. Aceita o desafio?</p>
            </div>
            <Link to="/character" className='start'>
                <FaPlay />Start
            </Link>
        </div>
    )
}

export default Home;
