import './Header.css';
import { FaHome } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { PlayerContext } from '../../Context';

function Header({ backButton }) {

    const { playerData } = useContext(PlayerContext);

    return (
        <div>
            <header className='header-container'>
                <div className="redirect">
                    {backButton && (
                        <li><Link to="/game" className='link'><FaArrowLeft className='icons'/></Link></li>
                    )}
                    <Link to='/'>
                        <FaHome className='icons' />
                    </Link>
                </div>
                <div className="info-player">
                    <p className="info-group">
                        <SiElixir className='icons' /> 0
                    </p>
                    <p className='info-group'>
                        <FaHeart className='icons' /> {playerData.health}
                    </p>
                    <p className='info-group'> 
                        <FaRegMoneyBillAlt className='icons' /> {playerData.gold}
                    </p>
                    <p className="info-group">
                        <FaGun className='icons' /> Graveto
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Header;
