import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import ImgHealth from '../../assets/items/health.png';
import ImgXp from '../../assets/items/xp.png';
import ImgSword from '../../assets/items/sword.png';

function Store() {
    const weapons = [
        { name: 'Sticky', power: 10, cost: 10 },
        { name: 'Machado', power: 30, cost: 20 },
        { name: 'Espada', power: 50, cost: 30 },
        { name: 'Pistola', power: 100, cost: 50 }
    ];

    // Retrieve initial values from localStorage or set defaults
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    const [health, setHealth] = useState(parseInt(localStorage.getItem("Health")) || 0);
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);

    let initialWeapon;
    try {
        initialWeapon = JSON.parse(localStorage.getItem("Weapon")) || weapons[0];
    } catch (error) {
        initialWeapon = weapons[0]; // Set the first item in the list as the default ("Sticky")
    }

    const [weapon, setWeapon] = useState(initialWeapon);

    useEffect(() => {
        localStorage.setItem("Gold", gold);
    }, [gold]);

    useEffect(() => {
        localStorage.setItem("Health", health);
    }, [health]);

    useEffect(() => {
        localStorage.setItem("XP", xp);
    }, [xp]);

    useEffect(() => {
        localStorage.setItem("Weapon", JSON.stringify(weapon));
    }, [weapon]);

    const [comments, setComments] = useState("");

    const messages = {
        noGold: "Ouro insufiente, é difícil a pobreza...",
        bestWeapon: "Você já tem a melhor arma, doidão!",
        addHealth: "+10 Saúde adicionada!",
        addXP: "+5 XP adicionada!"
    };

    const currentIndex = weapons.findIndex(a => a.name === weapon.name);
    const nextWeapon = currentIndex < weapons.length - 1 ? weapons[currentIndex + 1] : null;

    const items = [
        { id: 1, type: "+10 Saúde", image: ImgHealth, name: "10$", actionBtn: addHealth },
        { id: 2, type: "+5 XP", image: ImgXp, name: "5$", actionBtn: addXP },
        {
            id: 3,
            type: nextWeapon ? nextWeapon.name : "Suprema",
            image: ImgSword,
            name: nextWeapon ? `${nextWeapon.cost}$` : "Indisponível",
            actionBtn: nextWeapon ? buyWeapon : null
        }
    ];

    function buyItem(cost, setState, currentValue, incrementValue, successMessage) {
        if (gold >= cost) {
            const newGold = gold - cost;
            const newValue = currentValue + incrementValue;
            setGold(newGold);
            setState(newValue);
            setComments(successMessage);
        } else {
            setComments(messages.noGold);
        }
        setTimeout(() => setComments(""), 2000);
    }

    function addHealth() {
        buyItem(10, setHealth, health, 10, messages.addHealth);
    }

    function addXP() {
        buyItem(5, setXp, xp, 5, messages.addXP);
    }

    function buyWeapon() {
        if (nextWeapon) {
            if (gold >= nextWeapon.cost) {
                const newGold = gold - nextWeapon.cost;
                setGold(newGold); 
                setWeapon(nextWeapon); 
                setComments(`Você comprou a arma ${nextWeapon.name}!`);
            } else {
                setComments(messages.noGold);
            }
        } else {
            setComments(messages.bestWeapon);
        }
        setTimeout(() => setComments(""), 2000);
    }

    return (
        <div className='game-page store-page'>
            <Header 
                backButton 
                gold={gold} 
                health={health} 
                xp={xp} 
                weapon={weapon.name} // Displays the weapon name in the header
            />
            <div className="destiny-page">
                <h1>Deixe de ser pão-duro:</h1>
                <div className='destiny-container'>
                    {items.map((item) => (
                        <Cards
                            key={item.id}
                            type={item.type}
                            img={item.image}
                            name={item.name}
                            handleClick={item.actionBtn}
                            disabled={!item.actionBtn}  // Disable when no action
                        />
                    ))}
                </div>
            </div>
            <p id="comments">{comments}</p>
        </div>
    );
}

export default Store;
