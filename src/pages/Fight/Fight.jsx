import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Atacar from '../../assets/atacar-pixel.png';
import Desviar from '../../assets/desviar-pixel.png';
import Voltar from '../../assets/fundo-praca-clara.jpg';
import { useNavigate } from "react-router-dom";

function Fight() {

    // Estados para armazenar os valores do localStorage
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);
    const [health, setHealth] = useState(parseInt(localStorage.getItem("Health")) || 0);
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [weapon, setWeapon] = useState(localStorage.getItem("Weapon") || 0);
    const [monsterH, setMonsterH] = useState(localStorage.getItem("Monster") || 0);
    const [monsterLevel, setMonsterLevel] = useState(localStorage.getItem("Monster" || 0));

    const actions = [
        {id: 1, type: "Atacar", image: Atacar, name: "Tapa", actionBtn: atacar},
        {id: 2, type: "Desviar", image: Desviar, name: "Ninja", actionBtn: desviar},
        {id: 3, type: "Fugir", image: Voltar, name: "Correr", actionBtn: fugir}
    ]

    const navigate = useNavigate();
    const [comentarios, setComentarios] = useState("");

        // useEffect para recuperar a arma do localStorage e parsear
        useEffect(() => {
            const storedWeapon = localStorage.getItem("Weapon");
            console.log("StoredWeapon " + storedWeapon);
            if (storedWeapon) {
                try {
                    const parsedWeapon = JSON.parse(storedWeapon); // Parse o objeto JSON
                    setWeapon(parsedWeapon.poder); // Define o objeto da arma no estado
                } catch (error) {
                    console.error("Erro ao parsear o objeto Weapon do localStorage:", error);
                }
            }

            const storedMonster = localStorage.getItem("Monster");
            if (storedMonster) {
            const monsterObj = JSON.parse(storedMonster);
            console.log("Monstro recuperado:", monsterObj);
            setMonsterH(monsterObj.saude);
            setMonsterLevel(monsterObj.level);
    }
        }, []);

        // Recupera o poder da arma, se ela existir
    const weaponPower = weapon ? weapon : 0;

    //const [monsterH, setMonsterH] = useState(parseInt(localStorage.getItem("MonsterHealth")) || 0);
    //console.log(monsterH);

    function getValorAtaqueMonstro(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * xp));
        console.log(hit);
        return hit > 0 ? hit : 0;
    }

    function monstroHit() {
        //return Math.random() > .2 || saude < 20;
    }
    

    function atacar() {
        // Cálculo do dano do jogador
        console.log("Monster H "+ monsterH);
        console.log(typeof xp);
        const danoJogador = weaponPower + Math.floor(Math.random() * xp) + 1;
        console.log("XP " + xp);
        console.log("DanoJogador " + danoJogador);
        const novaSaudeMonstro = monsterH - danoJogador;
        console.log("NovaSaudeMonstro ", novaSaudeMonstro)
        //console.log("Poder " + weapon.poder);
    
        // Atualize a saúde do monstro
        setMonsterH(novaSaudeMonstro);
        localStorage.setItem("MonsterHealth", novaSaudeMonstro);
    
        if (novaSaudeMonstro <= 0) {
            console.log("Monstro derrotado!");
            const newXpValue = xp + monsterLevel * 10;
            const newGoldValue = gold + monsterLevel * 5;
            setXp(newXpValue);
            setGold(newGoldValue);
            localStorage.setItem("XP", newXpValue);
            localStorage.setItem("Gold", newGoldValue);
            setComentarios(`Monstro abatido com sucesso!\n+${monsterLevel * 10} XP\n+${monsterLevel * 5} moedas`);
            setTimeout(() => navigate("/game"), 2000); // Redireciona após 2 segundos
            return;
        }
    
        // Monstro contra-ataca
        const danoMonstro = getValorAtaqueMonstro(monsterLevel);
        const novaSaudeJogador = health - danoMonstro;
        setHealth(novaSaudeJogador);
        localStorage.setItem("Health", novaSaudeJogador);
    
        if (novaSaudeJogador <= 0) {
            console.log("Você foi derrotado!");
            setComentarios("Você foi abatido, tente novamente!");
            setTimeout(() => navigate("/restart"), 1000);
            // Pode redirecionar ou resetar o estado
        }
    }
    
    
    function desviar() {
        const chanceDesvio = Math.random();
        if (chanceDesvio > 0.5) {
            console.log("Desvio bem-sucedido! Nenhum dano recebido.");
            console.log(monsterLevel);
            const novoXp = xp + (monsterLevel * 2);  // Calcule o novo XP aqui
            setXp(novoXp);  // Atualize o estado com o novo XP
            localStorage.setItem("XP", novoXp);  // Armazene o novo XP no localStorage
            setComentarios(`Desvio bem-sucedido! Nenhum dano recebido. +${monsterLevel * 2} XP`);
        } else {
            console.log("Desvio falhou! Você foi atingido.");
            const danoRecebido = getValorAtaqueMonstro(monsterLevel);
            setComentarios(`Desvio falhou! Você foi atingido. -${danoRecebido}`);
            const novaSaudeJogador = health - danoRecebido;
            setHealth(novaSaudeJogador);
            localStorage.setItem("Health", novaSaudeJogador);
    
            if (novaSaudeJogador <= 0) {
                console.log("Você foi derrotado!");
                // Pode redirecionar ou resetar o estado
                setComentarios("Você foi derrotado!");
                setTimeout(() => navigate("/restart"), 1000);
            }
        }
        setTimeout(() => setComentarios(""), 2000);
    }
    
        


    function fugir() {
        console.log("Fugindo da batalha...");
        setComentarios("Arregou mesmo???");
        setTimeout(() => navigate("/game"), 1000);
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
            <p id="coments">{comentarios}</p>
        </div>
    )
}

export default Fight;