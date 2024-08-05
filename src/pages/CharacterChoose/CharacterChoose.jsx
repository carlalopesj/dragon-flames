import { useState } from 'react';
import './CharacterChoose.css';
import Characters from '../../components/Characters/Characters';
import ImgArc from '../../assets/arc-sem-fundo.png';
import ImgFeit from '../../assets/bruxa-sem-fundo.png';
import ImgPir from '../../assets/pirata-sem-fundo.png';

function CharacterChoose() {

    const characters = [
        { id: 1, type: "Arqueiro", image: ImgArc, health: 100, gold: 100, name: "Catatau" },
        { id: 2, type: "Feiticeira", image: ImgFeit, health: 120, gold: 80, name: "Verruguinha" },
        { id: 3, type: "Pirata", image: ImgPir, health: 80, gold: 120, name: "Saca-Rolhas" }
    ];

    return (
        <div className="choose-page">
            <h1>Escolha um personagem: </h1>
            <div className='choose-container'>
                {characters.map((character) => (
                     <Characters
                        key={character.id}
                        type={character.type}
                        img={character.image}
                        health={character.health}
                        gold={character.gold}
                        name={character.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default CharacterChoose;
