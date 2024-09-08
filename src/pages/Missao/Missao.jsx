import { useState } from "react";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Imagem1 from '../../assets/fundo-adivinhar1.png';
import Imagem2 from '../../assets/fundo-adivinhar2.png';
import Imagem3 from '../../assets/fundo-adivinhar3.png';

function Missao() {

    const missoes = [
        {id: 1, type: "1", name: "Sorte", image: Imagem1, actionBtn: sorte1},
        {id: 2, type: "2", name: "Sorte", image: Imagem2, actionBtn: sorte2},
        {id: 3, type: "3", name: "Sorte", image: Imagem3, actionBtn: sorte3}
    ];

    const premios = [15, 30, 50];
    
    const [xp, setXp] = useState(parseInt(localStorage.getItem("XP")) || 0);
    const [gold, setGold] = useState(parseInt(localStorage.getItem("Gold")) || 0);

    const [comentarios, setComentarios] = useState("");
    
    function sortear(x) {
        if (xp < 10) {
            setComentarios("XP insuficiente, precisa de pelo menos 10, cabeção!");
            setTimeout(() => setComentarios(""), 2000);  // Limpa o comentário após 3 segundos
        } else {
            let newXp = xp - 10;
            setXp(newXp);
            localStorage.setItem("XP", newXp);
            const numSorte = 1 + Math.floor(Math.random() * 3);
            if (x === numSorte) {
                // Corrigido: Gera o índice corretamente entre 0 e 2
                let number = Math.floor(Math.random() * premios.length);
                let novoGold = gold + premios[number];
                setGold(novoGold);
                localStorage.setItem("Gold", novoGold);
                setComentarios(`Parabéns, você ganhou +${premios[number]} moedas!!!`);
            } else {
                setComentarios("Vish... Não foi dessa vez, quem sabe da próxima!");
            }
            setTimeout(() => setComentarios(""), 2000);  // Limpa o comentário após 3 segundos
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
        <div className="game-page missao-page">
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
            <p id="coments">{comentarios}</p>
        </div>
    );
}

export default Missao;
