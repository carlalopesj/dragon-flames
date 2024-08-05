import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import ImgHealth from '../../assets/saude-pixel.png';
import ImgXp from '../../assets/xp-pixel.png';
import ImgSword from '../../assets/espada-pixel.png';
import { useContext } from "react";
import { PlayerContext } from "../../Context";

function Loja() {

    const { playerData, setPlayerData } = useContext(PlayerContext);

    const items = [
        {id: 1, type: "Saúde", image: ImgHealth, name: "+10 Saúde", actionBtn: addHealth},
        {id: 2, type: "XP", image: ImgXp, name: "+5 XP" },
        {id: 3, type: "Arma", image: ImgSword, name: "Nova Arma"}
    ]

    function addHealth() {
        console.log("Health clicado");
        setPlayerData((prevData) => ({
            ...prevData,
            health: prevData.health + 10,
            gold: prevData.gold - 10 // supondo que a ação de adicionar saúde custa 10 de ouro
        }));
    }

    return (
        <div className='game-page'>
            <Header backButton/>
            <div className="destiny-page">
                <h1> Gaste seu precioso dinheiro: </h1>
                <div className='destiny-container'>
                    {items.map((item) => {
                        return <Cards 
                            key={item.id}
                            type={item.type}
                            img={item.image}
                            name={item.name}
                            handleClick={item.actionBtn}
                            
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Loja;