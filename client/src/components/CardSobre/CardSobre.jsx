import './CardSobre.css';

function CardSobre(props) {

    const {
        titulo,
        texto,
        imagem,
        largura = 360,
        altura = 370
    } = props;

    const renderTexto = (texto) => {
        if (Array.isArray(texto)){
            return (texto.map(linha => <span>{linha}</span>));
        } else {
            return (<p>{texto}</p>)
        }
    }

    return (
        <div className="card" style ={{width: largura + 'px', height: altura + 'px'}}>
            <img src={imagem} alt="icone"/>
            <h2>{titulo}</h2>
            <div id="texto">{renderTexto(texto)}</div>  
        </div>
    );
}

export default CardSobre;