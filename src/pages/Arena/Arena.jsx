import { useState } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Monster1 from '../../assets/monst-1.jpg';
import Monster2 from '../../assets/monst-2.jpg';
import Dragao from '../../assets/dragao.jpg'

function Arena() {

    const monsters = [
        {id: 1, type: "Level 1", image: Monster1, name: "Piruba", saude: 15, level: 2, actionBtn: lutarOne},
        {id: 2, type: "Level 2", image: Monster2, name: "Cazabin", saude: 60, level: 8, actionBtn: lutarTwo},
        {id: 3, type: "Level 3", image: Dragao, name: "Pimenta", saude: 300, level: 20, actionBtn: lutarTree}
    ]

    function lutarOne() {
        let monster1 = 0;
        armazenar(monster1);
    }
    function lutarTwo() {
        console.log("Funcionando 2");
        let monster2 = 1;
        armazenar(monster2);
    }
    function lutarTree() {
        console.log("Funcionando 3");
        let monster3 = 2;
        armazenar(monster3);
    }

    function armazenar(x) {
        localStorage.setItem("Monster", JSON.stringify(monsters[x]));
        localStorage.setItem("MonsterHealth", JSON.stringify(monsters[x].saude));
    }

    return (
        <div className="game-page arena-page">
            <Header backButton/>
            <div className="destiny-page">
                <h1> Hora da Treta: </h1>
                <div className="destiny-container">
                    {monsters.map((monster) => {
                        return <Cards 
                            key={monster.id}
                            type={monster.type}
                            img={monster.image}
                            name={monster.name}
                            handleClick={monster.actionBtn}
                            link={'/fight'}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Arena;