import './Home.css';
import { Link } from 'react-router-dom';
import ImgDragon from '../../assets/dragao.jpg';
import { FaPlay } from "react-icons/fa6";

function Home() {
    return (
        <div className="home-page">
            <div>
                <h1 id="title">Dragon Flames</h1>
                <img id="img-dragon" src={ImgDragon} />
                <p id="description" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex ea rem quas magni illum dolorem culpa minima itaque quos optio minus, atque sequi adipisci enim quidem nostrum quia ut ratione?</p>
            </div>
            <Link to="/character" className='start'>
                <FaPlay />Start
            </Link>
        </div>
    )
}

export default Home;
