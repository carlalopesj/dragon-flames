import './Header.css';
import { FaHome } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className='header-container'>
                <Link to='/'>
                    <FaHome className='icons' />
                </Link>
                <div className="info-player">
                    <SiElixir className='icons' />
                    <FaHeart className='icons' />
                    <FaRegMoneyBillAlt className='icons' />
                    <FaGun className='icons' />
                </div>
            </header>
        </div>
    )
}

export default Header;