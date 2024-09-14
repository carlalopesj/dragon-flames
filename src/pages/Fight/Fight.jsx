import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Attack from '../../assets/items/attack.png';
import Escape from '../../assets/items/escape.png';
import Back from '../../assets/backgrounds/background-game-clean.jpg';
import { useNavigate } from "react-router-dom";

function Fight() {

    // States to store localStorage values
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    const [health, setHealth] = useState(parseInt(localStorage.getItem("Health")) || 0);
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [weapon, setWeapon] = useState(localStorage.getItem("Weapon") || 0);
    const [monsterH, setMonsterH] = useState(localStorage.getItem("Monster") || 0);
    const [monsterLevel, setMonsterLevel] = useState(localStorage.getItem("Monster" || 0));

    const actions = [
        {id: 1, type: "Atacar", image: Attack, name: "Tapa", actionBtn: attack},
        {id: 2, type: "Desviar", image: Escape, name: "Ninja", actionBtn: escape},
        {id: 3, type: "Fugir", image: Back, name: "Correr", actionBtn: run}
    ]

    const navigate = useNavigate();
    const [comments, setComments] = useState("");

    // useEffect to retrieve the weapon from localStorage and parse it
    useEffect(() => {
        const storedWeapon = localStorage.getItem("Weapon");
        if (storedWeapon) {
            try {
                const parsedWeapon = JSON.parse(storedWeapon); // Parse the object to JSON
                setWeapon(parsedWeapon.power); // Sets the weapon object in the state
            } catch (error) {
                console.error("Erro ao parsear o objeto Weapon do localStorage:", error);
            }
        }

        const storedMonster = localStorage.getItem("Monster");
        if (storedMonster) {
            const monsterObj = JSON.parse(storedMonster);
            setMonsterH(monsterObj.health);
            setMonsterLevel(monsterObj.level);
        }
    }, []);

    // Recovers weapon power, if it exists
    const weaponPower = weapon ? weapon : 0;

    function updatePlayerStats(newGold, newXp, newHealth) {
        if (newGold !== undefined) {
            setGold(newGold);
            localStorage.setItem("Gold", newGold);
        }
        if (newXp !== undefined) {
            setXp(newXp);
            localStorage.setItem("XP", newXp);
        }
        if (newHealth !== undefined) {
            setHealth(newHealth);
            localStorage.setItem("Health", newHealth);
        }
    }

    function getAttackValueMonster(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        return hit > 0 ? hit : 0;
    }

    function attack() {
        const damagePlayer = weaponPower + Math.floor(Math.random() * xp) + 1;
        const newMonsterHealth = monsterH - damagePlayer;
        setMonsterH(newMonsterHealth);
        localStorage.setItem("MonsterHealth", newMonsterHealth);

        if (newMonsterHealth <= 0) {
            const newXpValue = xp + monsterLevel * 10;
            const newGoldValue = gold + monsterLevel * 5;
            updatePlayerStats(newGoldValue, newXpValue, health);
            setComments(`Monstro abatido!\n+${monsterLevel * 10} XP\n+${monsterLevel * 5} moedas`);
            win(monsterLevel);
            return;
        }

        const damageMonster = getAttackValueMonster(monsterLevel);
        const newPlayerHealth = health - damageMonster;
        updatePlayerStats(gold, xp, newPlayerHealth);

        if (newPlayerHealth <= 0) {
            setComments("Você foi abatido, tente novamente!");
            lose(newPlayerHealth);
        }
    }
    
    function escape() {
        const escapeChance = Math.random();
        if (escapeChance > 0.5) {
            const newXp = xp + (monsterLevel * 2);
            updatePlayerStats(gold, newXp, health);
            setComments(`Desvio bem-sucedido! +${monsterLevel * 2} XP`);
        } else {
            const damageReceived = getAttackValueMonster(monsterLevel);
            const newPlayerHealth = health - damageReceived;
            updatePlayerStats(gold, xp, newPlayerHealth);
            setComments(`Desvio falhou! -${damageReceived}`);

            if (newPlayerHealth <= 0) {
                setComments("Você foi derrotado!");
                lose(newPlayerHealth);
            }
        }
        setTimeout(() => setComments(""), 2000);
    }
    
    function run() {
        setComments("Arregou mesmo???");
        setTimeout(() => navigate("/game"), 1000);
    }

    function lose(playerHealth) {
        if(playerHealth < 0) {
            localStorage.setItem("result", "defeat");
            setTimeout(() => navigate("/restart"), 1000);
        } 
    }

    function win(monsterLevel) {
        if (monsterLevel === 20) {
            localStorage.setItem("result", "victory");
            setTimeout(() => navigate("/restart"), 1000);
        } else {
            setTimeout(() => navigate("/game"), 2000); 
        }
    }
    

    return (
        <div className="game-page arena-page">
            <Header backButton/>
            <div className="destiny-page">
                <h1> Hora da Treta: </h1>
                <div className="destiny-container">
                    {actions.map((action) => {
                        return <Cards 
                            key={action.id}
                            type={action.type}
                            img={action.image}
                            name={action.name}
                            handleClick={action.actionBtn}
                        
                        />
                    })}
                </div>
            </div>
            <p id="comments">{comments}</p>
        </div>
    )
}

export default Fight;