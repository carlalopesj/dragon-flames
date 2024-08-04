import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Monster1 from '../../assets/monst-1.jpg';
import Monster2 from '../../assets/monst-2.jpg';
import Dragao from '../../assets/dragao.jpg'

function Arena() {

    const monsters = [
        {id: 1, type: "Level 1", image: Monster1, name: "Piruba"},
        {id: 2, type: "Level 2", image: Monster2, name: "Cazabin"},
        {id: 3, type: "Level 3", image: Dragao, name: "Pimenta"}
    ]

    return (
        <div className="game-page">
            <Header backButton/>
            <div className="destiny-page">
                <h1> Hora do fight: </h1>
                <div className="destiny-container">
                    {monsters.map((monster) => {
                        return <Cards 
                            key={monster.id}
                            type={monster.type}
                            img={monster.image}
                            name={monster.name}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Arena;