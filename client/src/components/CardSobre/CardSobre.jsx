import './CardSobre.css';

function CardSobre(props) {

    const {
        titulo,
        texto,
        imagem,
        largura = 300,
        altura = 300
    } = props;

    return (
        <div className="card" style ={{width: largura + 'px', height: altura + 'px'}}>
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <div id="texto">
                {(Array.isArray(texto))?(texto.map(linha => <span>{linha}</span>)):(<p>{texto}</p>)}
            </div>  
        </div>
    );
}

export default CardSobre;