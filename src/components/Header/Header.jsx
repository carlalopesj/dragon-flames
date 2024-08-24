import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaHome } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header({ backButton }) {
    // Estados para armazenar os valores do localStorage
    const [xp, setXp] = useState(localStorage.getItem("XP") || 0);
    const [health, setHealth] = useState(localStorage.getItem("Health") || 0);
    const [gold, setGold] = useState(localStorage.getItem("Gold") || 0);
    const [weapon, setWeapon] = useState(localStorage.getItem("Weapon") || '');

    // Atualiza o estado quando o localStorage muda
    useEffect(() => {
        const interval = setInterval(() => {
            setXp(localStorage.getItem("XP") || 0);
            setHealth(localStorage.getItem("Health") || 0);
            setGold(localStorage.getItem("Gold") || 0);
            setWeapon(localStorage.getItem("Weapon") || '');
        }, 300); // Verifica a cada 500ms

        // Cleanup
        return () => clearInterval(interval);
    }, []);

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
                        <SiElixir className='icons' /> {xp}
                    </p>
                    <p className='info-group'>
                        <FaHeart className='icons' /> {health}
                    </p>
                    <p className='info-group'> 
                        <FaRegMoneyBillAlt className='icons' /> {gold}
                    </p>
                    <p className="info-group">
                        <FaGun className='icons' /> {weapon}
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Header;
