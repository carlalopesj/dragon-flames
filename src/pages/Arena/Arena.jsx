import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Monster1 from '../../assets/monsters/monster-1.jpg';
import Monster2 from '../../assets/monsters/monster-2.jpg';
import Dragon from '../../assets/monsters/dragon.jpg';

function Arena() {

    const monsters = [
        {id: 1, type: "Level 1", image: Monster1, name: "Piruba", health: 15, level: 2, actionBtn: () => store(0)},
        {id: 2, type: "Level 2", image: Monster2, name: "Cazabin", health: 60, level: 8, actionBtn: () => store(1)},
        {id: 3, type: "Level 3", image: Dragon, name: "Pimenta", health: 300, level: 20, actionBtn: () => store(2)}
    ]

    function store(x) {
        localStorage.setItem("Monster", JSON.stringify(monsters[x]));
        localStorage.setItem("MonsterHealth", JSON.stringify(monsters[x].health));
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