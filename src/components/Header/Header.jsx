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
    // Estados para armazenar os valores do localStorage
    const [xp, setXp] = useState(localStorage.getItem("XP") || 0);
    const [health, setHealth] = useState(localStorage.getItem("Health") || 0);
    const [gold, setGold] = useState(localStorage.getItem("Gold") || 0);
    const [weaponName, setWeaponName] = useState('');
    const [monsterHealth, setMonsterHealth] = useState(localStorage.getItem("MonsterHealth") || 0);

    // Hook do React Router para obter a localização atual
    const location = useLocation();

    // Verifica se a rota atual é uma das páginas específicas onde o MonsterHealth deve aparecer
    const shouldShowMonsterHealth = location.pathname === "/fight";

    // Atualiza o estado quando o localStorage muda
    useEffect(() => {
        const interval = setInterval(() => {
            setXp(localStorage.getItem("XP") || 0);
            setHealth(localStorage.getItem("Health") || 0);
            setGold(localStorage.getItem("Gold") || 0);
            setMonsterHealth(localStorage.getItem("MonsterHealth"));

            // Tenta fazer o parse do valor de "Weapon" como JSON
            try {
                const weapon = JSON.parse(localStorage.getItem("Weapon"));
                if (weapon && weapon.nome) {
                    setWeaponName(weapon.nome); // Define apenas o nome da arma
                } else {
                    setWeaponName(''); // Se não houver arma, define como string vazia
                }
            } catch (error) {
                // Se houver erro no parse (por exemplo, se o valor ainda for uma string simples)
                setWeaponName(localStorage.getItem("Weapon") || '');
            }
        }, 300); // Verifica a cada 300ms

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
                {/* Exibe o MonsterHealth apenas nas páginas específicas */}
                {shouldShowMonsterHealth && (
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
                {shouldShowMonsterHealth && (
                    <p className='monster-health-mobile'> Monster Health: {monsterHealth} </p>
                )}
        </div>
    );
}

export default Header;
