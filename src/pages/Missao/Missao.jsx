import { useState } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";



function Missao() {

    const missoes = [
        {id: 1, type: "1", name: "Sorte", actionBtn: sorte1},
        {id: 2, type: "2", name: "Sorte", actionBtn: sorte2},
        {id: 3, type: "3", name: "Sorte", actionBtn: sorte3}
    ]

    const premios = [15, 30, 50];
    
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    
    function sortear(x) {
        console.log(xp);
        if (xp < 10) {
            console.log("Pouco XP");
            //setXp(xp);
        } else {
            let newXp = xp - 10;
            setXp(newXp);
            localStorage.setItem("XP", newXp);
            const numSorte = 1+ Math.floor(Math.random() * 3);
            console.log(numSorte);
            if (x === numSorte) {
                console.log("BOA");
                let number = 1+ Math.floor(Math.random() * 3);
                localStorage.setItem("Gold", gold + premios[number]);
            } else {
                console.log("POXA");
            }
            console.log(xp);
        }
    }
    
    function sorte1() {
        sortear(1);
    }
    
    function sorte2() {
        sortear(2);
    }
    
    function sorte3() {
        sortear(3);
    }

    return (
        <div className="game-page">
            <Header backButton/>
            <div className="destiny-page">
                <h1> Escolha seu número da sorte </h1>
                <div className="destiny-container">
                    {missoes.map((missao) => {
                        return <Cards 
                            key={missao.id}
                            type={missao.type}
                            img={missao.image}
                            name={missao.name}
                            handleClick={missao.actionBtn}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Missao;