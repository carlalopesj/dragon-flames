import './CharacterChoose.css';
import Characters from '../../components/Characters/Characters';
import ImgArc from '../../assets/arc-sem-fundo.png';
import ImgFeit from '../../assets/bruxa-sem-fundo.png';
import ImgPir from '../../assets/pirata-sem-fundo.png';

function CharacterChoose() {
    return (
        <div className="choose-page">
            <h1>Escolha um personagem: </h1>
            <div className='choose-container'>
                <Characters 
                    img={ImgArc}
                    type="Arqueiro"
                    health="100"
                    gold="100"
                    name="Catatau"
                />
                <Characters 
                    img={ImgFeit}
                    type="Feiticeira"
                    health="120"
                    gold="80"
                    name="Verruguinha"
                />
                <Characters 
                    img={ImgPir}
                    type="Pirata"
                    health="80"
                    gold="120"
                    name="Saca-Rolhas"
                />
            </div>
        </div>
    )
}

export default CharacterChoose;