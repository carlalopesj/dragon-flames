import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Guess1 from '../../assets/items/guess-1.png';
import Guess2 from '../../assets/items/guess-2.png';
import Guess3 from '../../assets/items/guess-3.png';

function Mission() {

    const missions = [
        {id: 1, type: "1", name: "Sorte", image: Guess1, actionBtn: () => sort(1)},
        {id: 2, type: "2", name: "Sorte", image: Guess2, actionBtn: () => sort(2)},
        {id: 3, type: "3", name: "Sorte", image: Guess3, actionBtn: () => sort(3)}
    ];

    const awards = [15, 30, 50];
    
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);

    // Automatically update localStorage when xp or gold changes
    useEffect(() => {
        localStorage.setItem("XP", xp);
    }, [xp]);

    useEffect(() => {
        localStorage.setItem("Gold", gold);
    }, [gold]);

    const [comments, setComments] = useState("");
    const messages = {
        xpInsufficient: "XP insuficiente, precisa de pelo menos 10, cabeção!",
        wonGold: (amount) => `Parabéns, você ganhou +${amount} moedas!!!`,
        lost: "Vish... Não foi dessa vez, quem sabe da próxima!"
    }
    
    function sort(x) {
        if (xp < 10) {
            setComments(messages.xpInsufficient);
            setTimeout(() => setComments(""), 3000);  // Clears comment after 3 seconds
        } else {
            let newXp = xp - 10;
            setXp(newXp);
            const numLucky = 1 + Math.floor(Math.random() * 3);
            if (x === numLucky) {
                let number = Math.floor(Math.random() * awards.length);
                let newGold = gold + awards[number];
                setGold(newGold);
                setComments(messages.wonGold(awards[number]));
            } else {
                setComments(messages.lost);
            }
            setTimeout(() => setComments(""), 3000); 
        }
    }

    return (
        <div className="game-page mission-page">
            <Header backButton/>
            <div className="destiny-page">
                <h1> Escolha seu número da sorte </h1>
                <div className="destiny-container">
                    {missions.map((mission) => {
                        return <Cards 
                            key={mission.id}
                            type={mission.type}
                            img={mission.image}
                            name={mission.name}
                            handleClick={mission.actionBtn}
                        />
                    })}
                </div>
            </div>
            <p id="comments">{comments}</p>
        </div>
    );
}

export default Mission;
