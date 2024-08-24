import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import ImgHealth from '../../assets/saude-pixel.png';
import ImgXp from '../../assets/xp-pixel.png';
import ImgSword from '../../assets/espada-pixel.png';

function Loja() {
    // Estados para armazenar os valores do localStorage
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    const [health, setHealth] = useState(parseInt(localStorage.getItem("Health")) || 0);
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [weapon, setWeapon] = useState(localStorage.getItem("Weapon") || '');

    const items = [
        { id: 1, type: "Saúde", image: ImgHealth, name: "+10 Saúde", actionBtn: addHealth },
        { id: 2, type: "XP", image: ImgXp, name: "+5 XP", actionBtn: addXP },
        { id: 3, type: "Arma", image: ImgSword, name: "Nova Arma", actionBtn: newWeapon }
    ];

    function addHealth() {
        console.log("Função chamadaaaa");
        if (gold >= 10) { // Certifique-se de que o jogador tenha ouro suficiente
            const newGold = gold - 10;
            const newHealth = health + 10;

            // Atualiza o localStorage e o estado
            localStorage.setItem("Gold", newGold);
            localStorage.setItem("Health", newHealth);
            setGold(newGold);
            setHealth(newHealth);
        }
    }

    function addXP() {
        // Lógica para adicionar XP
        console.log("Teste");
        if (gold >= 5) {
            const newGold = gold - 5;
            const newXp = xp + 5;

            localStorage.setItem("Gold", newGold);
            localStorage.setItem("XP", newXp);
            setGold(newGold);
            setXp(newXp);
        }

    }

    function newWeapon() {
        // Lógica para trocar a arma
        if (gold >= 10) {
            if(weapon === 'Sticky') {
                const newGold = gold - 10;

                localStorage.setItem("Gold", newGold);
                localStorage.setItem("Weapon", "Machado");
                setGold(newGold);
                setWeapon("Machado");
            }

            if (gold >= 20) {
                if (weapon === 'Machado') {
                    const newGold = gold - 20;
    
                    localStorage.setItem("Gold", newGold);
                    localStorage.setItem("Weapon", "Espada");
                    setGold(newGold);
                    setWeapon("Espada");
                }
            }

            if (gold >= 30) {
                if (weapon === 'Espada') {
                    const newGold = gold - 30;
    
                    localStorage.setItem("Gold", newGold);
                    localStorage.setItem("Weapon", "Pistola");
                    setGold(newGold);
                    setWeapon("Pistola");
                }
            }

        }
    }

    return (
        <div className='game-page'>
            {/* Passa os valores como props para o Header */}
            <Header 
                backButton 
                gold={gold} 
                health={health} 
                xp={xp} 
                weapon={weapon}
            />
            <div className="destiny-page">
                <h1>Gaste seu precioso dinheiro:</h1>
                <div className='destiny-container'>
                    {items.map((item) => (
                        <Cards
                            key={item.id}
                            type={item.type}
                            img={item.image}
                            name={item.name}
                            handleClick={item.actionBtn}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Loja;
