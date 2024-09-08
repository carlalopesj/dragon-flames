import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import ImgHealth from '../../assets/saude-pixel.png';
import ImgXp from '../../assets/xp-pixel.png';
import ImgSword from '../../assets/espada-pixel.png';

function Loja() {
    // Array de armas com nome e poder
    const armas = [
        { nome: 'Sticky', poder: 10, custo: 10 },
        { nome: 'Machado', poder: 30, custo: 20 },
        { nome: 'Espada', poder: 50, custo: 30 },
        { nome: 'Pistola', poder: 100, custo: 50 }
    ];

    const [comentarios, setComentarios] = useState("");

    // Recupera o objeto da arma do localStorage ou define o padrão
    let initialWeapon;
    try {
        initialWeapon = JSON.parse(localStorage.getItem("Weapon")) || armas[0];
    } catch (error) {
        initialWeapon = armas[0]; // Define o primeiro item da lista como padrão
    }

    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    const [health, setHealth] = useState(parseInt(localStorage.getItem("Health")) || 0);
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [weapon, setWeapon] = useState(initialWeapon);

    const items = [
        { id: 1, type: "+10 Saúde", image: ImgHealth, name: "10 moedas", actionBtn: addHealth },
        { id: 2, type: "+5 XP", image: ImgXp, name: "5 moedas", actionBtn: addXP },
        { id: 3, type: "Nova Arma", image: ImgSword, name: "Nova Arma", actionBtn: comprarArma }
    ];

    function addHealth() {
        if (gold >= 10) {
            const newGold = gold - 10;
            const newHealth = health + 10;

            localStorage.setItem("Gold", newGold);
            localStorage.setItem("Health", newHealth);
            setGold(newGold);
            setHealth(newHealth);
        } else {
            setComentarios("Ouro insufiente, é difícil a pobreza...");
        }
        setTimeout(() => setComentarios(""), 2000); 
    }

    function addXP() {
        if (gold >= 5) {
            const newGold = gold - 5;
            const newXp = xp + 5;

            localStorage.setItem("Gold", newGold);
            localStorage.setItem("XP", newXp);
            setGold(newGold);
            setXp(newXp);
        } else {
            setComentarios("Ouro insufiente, é difícil a pobreza...");
        }
        setTimeout(() => setComentarios(""), 2000); 
    }

    function comprarArma() {
        const armaAtualIndex = armas.findIndex(a => a.nome === weapon.nome);

        if (armaAtualIndex < armas.length - 1) {
            const proximaArma = armas[armaAtualIndex + 1];

            if (gold >= proximaArma.custo) {
                const newGold = gold - proximaArma.custo;
                localStorage.setItem("Gold", newGold);
                setGold(newGold);

                setWeapon(proximaArma);
                localStorage.setItem("Weapon", JSON.stringify(proximaArma));
            } else {
                setComentarios("Ouro insufiente, é difícil a pobreza...");
            }
        } else {
            setComentarios("Você já tem a melhor arma, doidão!");
        }
        setTimeout(() => setComentarios(""), 2000); 
    }

    return (
        <div className='game-page loja-page'>
            <Header 
                backButton 
                gold={gold} 
                health={health} 
                xp={xp} 
                weapon={weapon.nome} // Exibe o nome da arma no Header
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
                        />
                    ))}
                </div>
            </div>
            <p id="coments">{comentarios}</p>
        </div>
    );
}

export default Loja;
