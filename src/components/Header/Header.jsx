import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaHome } from "react-icons/fa";
import { SiElixir } from "react-icons/si";
import { FaHeart } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Header({ backButton }) {

    // Store values in localStorage
    const [xp, setXp] = useState(localStorage.getItem("XP") || 0);
    const [health, setHealth] = useState(localStorage.getItem("Health") || 0);
    const [gold, setGold] = useState(localStorage.getItem("Gold") || 0);
    const [weaponName, setWeaponName] = useState('');
    const [monsterHealth, setMonsterHealth] = useState(localStorage.getItem("MonsterHealth") || 0);

    // State for detecting window width
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // React Router Hook to obtain the actual location
    const location = useLocation();

    // Checks if the current route is "/fight"
    const shouldShowMonsterHealth = location.pathname === "/fight";

    // Updates state when localStorage changes
    useEffect(() => {
        const interval = setInterval(() => {
            setXp(localStorage.getItem("XP") || 0);
            setHealth(localStorage.getItem("Health") || 0);
            setGold(localStorage.getItem("Gold") || 0);
            setMonsterHealth(localStorage.getItem("MonsterHealth"));

            try {
                const weapon = JSON.parse(localStorage.getItem("Weapon"));
                if (weapon && weapon.name) {
                    setWeaponName(weapon.name); 
                } else {
                    setWeaponName('');
                }
            } catch (error) {
                setWeaponName(localStorage.getItem("Weapon") || '');
            }
        }, 300); // Check every 300ms

        return () => clearInterval(interval);
    }, []);

    // Handle window resize event to detect mobile screen
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <header className='header-container'>
                <div className="redirect">
                    {backButton && (
                        <li><Link to="/game" className='link'><FaArrowLeft className='icons' /></Link></li>
                    )}
                    <Link to='/'>
                        <FaHome className='icons' />
                    </Link>
                </div>

                {/* Display MonsterHealth for larger screens */}
                {shouldShowMonsterHealth && !isMobile && (
                    <p className='monster-health'> Monster Health: {monsterHealth} </p>
                )}

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
                        <FaGun className='icons' /> {weaponName}
                    </p>
                </div>
            </header>

            {/* Display MonsterHealth for mobile screens */}
            {shouldShowMonsterHealth && isMobile && (
                <p className='monster-health-mobile'> Monster Health: {monsterHealth} </p>
            )}
        </div>
    );
}

export default Header;
